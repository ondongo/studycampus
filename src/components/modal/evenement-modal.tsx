'use client';
import { useEffect, useState } from "react";
import useGlobalContext from "@/hooks/use-global-context";
import { CloseFourSvg } from "../svg";
import { Modal } from "react-bootstrap";
import { createEvenementAction, updateEvenementAction } from "@/backend/actions/evenements";
import { useEvenements } from "@/hooks/use-evenements";
import { v4 as uuid } from "uuid";

export default function EvenementModal() {
   const { 
      showEvenementAddEditModal, 
      handleEvenementAddEditModal, 
      evenementEditMode: edit,
      selectedDate
   } = useGlobalContext();
   
   const { refreshEvenements } = useEvenements();
   
   const [formData, setFormData] = useState({
      title: '',
      description: '',
      dateDebut: '',
      dateFin: '',
      etat: true
   });
   
   const [loading, setLoading] = useState(false);
   const [errors, setErrors] = useState<Record<string, string>>({});

   useEffect(() => {
      if (edit) {
         setFormData({
            title: edit.title || '',
            description: edit.description || '',
            dateDebut: edit.dateDebut ? new Date(edit.dateDebut).toISOString().slice(0, 16) : '',
            dateFin: edit.dateFin ? new Date(edit.dateFin).toISOString().slice(0, 16) : '',
            etat: edit.etat
         });
      } else {
         // Si une date a été sélectionnée depuis FullCalendar, l'utiliser
         const initialDate = selectedDate || new Date();
         const initialDateStr = initialDate.toISOString().slice(0, 16);
         
         setFormData({
            title: '',
            description: '',
            dateDebut: initialDateStr,
            dateFin: initialDateStr, // Par défaut, même date de début et fin
            etat: true
         });
      }
      setErrors({});
   }, [edit, selectedDate]);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target;
      const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
      
      setFormData(prev => ({
         ...prev,
         [name]: type === 'checkbox' ? checked : value
      }));
      
      // Clear error when user starts typing
      if (errors[name]) {
         setErrors(prev => ({ ...prev, [name]: "" }));
      }
   };

   const validateForm = () => {
      const newErrors: Record<string, string> = {};
      
      if (!formData.title.trim()) {
         newErrors.title = "Le titre est requis";
      }
      
      if (!formData.description.trim()) {
         newErrors.description = "La description est requise";
      }
      
      if (!formData.dateDebut) {
         newErrors.dateDebut = "La date de début est requise";
      }
      
      if (!formData.dateFin) {
         newErrors.dateFin = "La date de fin est requise";
      }
      
      if (formData.dateDebut && formData.dateFin) {
         const debut = new Date(formData.dateDebut);
         const fin = new Date(formData.dateFin);
         
         if (debut >= fin) {
            newErrors.dateFin = "La date de fin doit être postérieure à la date de début";
         }
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      if (!validateForm()) {
         return;
      }
      
      setLoading(true);
      try {
         if (edit) {
            // Mode modification
            await updateEvenementAction(edit.id, {
               title: formData.title,
               description: formData.description,
               dateDebut: new Date(formData.dateDebut),
               dateFin: new Date(formData.dateFin),
               etat: formData.etat
            });
         } else {
            // Mode création
            const evenementData = {
               id: uuid(),
               title: formData.title,
               description: formData.description,
               dateDebut: new Date(formData.dateDebut),
               dateFin: new Date(formData.dateFin),
               etat: formData.etat
            };
            
            await createEvenementAction(evenementData);
         }
         
         // Reset form after successful submission
         if (!edit) {
            setFormData({
               title: '',
               description: '',
               dateDebut: '',
               dateFin: '',
               etat: true
            });
         }
         
         // Close modal
         handleEvenementAddEditModal();

         // Rafraîchir les événements dans le calendrier
         try {
            await refreshEvenements();
         } catch (error) {
            console.error('Erreur lors du rafraîchissement des événements:', error);
         }
      
         
      } catch (error) {
         console.error('Erreur lors de la sauvegarde de l\'événement:', error);
         setErrors({ submit: "Une erreur est survenue lors de la sauvegarde" });
      } finally {
         setLoading(false);
      }
   };

   return (
      <>
         <Modal className="tpd-modal-evenement" show={showEvenementAddEditModal} onHide={handleEvenementAddEditModal} centered={true}>
            <div className="modal-header">
               <h4 className="tpd-modal-title" id="evenementModalTitle">
                  {edit ? 'Modifier' : 'Créer'} un événement
               </h4>
               <button 
                  onClick={() => handleEvenementAddEditModal()} 
                  type="button" 
                  className="tpd-modal-btn-close" 
                  data-bs-dismiss="modal" 
                  aria-label="Close"
               >
                  <span>
                     <CloseFourSvg />
                  </span>
               </button>
            </div>
            
            <div className="modal-body">
               <form onSubmit={handleSubmit}>
                  {errors.submit && (
                     <div className="alert alert-danger" role="alert">
                        {errors.submit}
                     </div>
                  )}
                  
                  <div className="tpd-input-white mb-20">
                     <label htmlFor="title">Titre <span className="text-danger">*</span></label>
                     <input 
                        type="text" 
                        id="title"
                        name="title"
                        placeholder="Titre de l'événement" 
                        value={formData.title} 
                        onChange={handleInputChange}
                        className={errors.title ? 'is-invalid' : ''}
                     />
                     {errors.title && (
                        <div className="invalid-feedback">{errors.title}</div>
                     )}
                  </div>
                  
                  <div className="tpd-input-white mb-20">
                     <label htmlFor="description">Description <span className="text-danger">*</span></label>
                     <textarea 
                        id="description"
                        name="description"
                        className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                        rows={4}
                        placeholder="Description de l'événement" 
                        value={formData.description} 
                        onChange={handleInputChange}
                     />
                     {errors.description && (
                        <div className="invalid-feedback">{errors.description}</div>
                     )}
                  </div>
                  
                  <div className="row mb-20">
                     <div className="col-md-6">
                        <div className="tpd-input-white">
                           <label htmlFor="dateDebut">Date de début <span className="text-danger">*</span></label>
                           <input 
                              type="datetime-local" 
                              id="dateDebut"
                              name="dateDebut"
                              value={formData.dateDebut} 
                              onChange={handleInputChange}
                              className={errors.dateDebut ? 'is-invalid' : ''}
                           />
                           {errors.dateDebut && (
                              <div className="invalid-feedback">{errors.dateDebut}</div>
                           )}
                        </div>
                     </div>
                     
                     <div className="col-md-6">
                        <div className="tpd-input-white">
                           <label htmlFor="dateFin">Date de fin <span className="text-danger">*</span></label>
                           <input 
                              type="datetime-local" 
                              id="dateFin"
                              name="dateFin"
                              value={formData.dateFin} 
                              onChange={handleInputChange}
                              className={errors.dateFin ? 'is-invalid' : ''}
                           />
                           {errors.dateFin && (
                              <div className="invalid-feedback">{errors.dateFin}</div>
                           )}
                        </div>
                     </div>
                  </div>
                  
                  <div className="tpd-input-white mb-20">
                     <div className="form-check" style={{ minHeight: "10px", height: "auto" }}>
                        <input
                           className="form-check-input"
                           type="checkbox"
                           id="etat"
                           name="etat"
                           checked={formData.etat}
                           onChange={handleInputChange}
                           style={{ minHeight: "10px", height: "16px", width: "16px" }}
                        />
                        <label className="form-check-label" htmlFor="etat" style={{ minHeight: "10px", lineHeight: "16px" }}>
                           Événement actif
                        </label>
                     </div>
                  </div>
               </form>
            </div>
            
            <div className="modal-footer">
               <button 
                  type="button" 
                  className="tpd-btn-cancel" 
                  onClick={() => handleEvenementAddEditModal()}
                  disabled={loading}
               >
                  Annuler
               </button>
               <button 
                  type="submit" 
                  className="tpd-btn-edit ml-10"
                  onClick={handleSubmit}
                  disabled={loading}
               >
                  {loading ? (
                     <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Enregistrement...
                     </>
                  ) : (
                     edit ? 'Modifier' : 'Créer'
                  )}
               </button>
            </div>
         </Modal>
      </>
   )
} 