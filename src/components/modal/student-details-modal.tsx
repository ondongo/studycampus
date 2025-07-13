'use client'
import Image from "next/image";
import { Modal } from "react-bootstrap";
import { CloseFourSvg, DownloadTwoSvg, OpenEye, TelSvg } from "../svg";
import { Etudiant, TypeStudent, Source } from "@/types/student";
import { markStudentAsSeen, markStudentAsContacted } from "@/backend/actions/students";

interface StudentDetailsModalProps {
  show: boolean;
  onHide: () => void;
  student: Etudiant | null;
  onStudentUpdate: () => void;
}

export default function StudentDetailsModal({ 
  show, 
  onHide, 
  student, 
  onStudentUpdate 
}: StudentDetailsModalProps) {
  
  if (!student) return null;

  const downloadStudentZip = () => {
    if (student.zipUrl) {
      const link = document.createElement('a');
      link.href = student.zipUrl;
      link.download = `${student.fname}_${student.lname}_dossier.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const markAsSeen = async () => {
    try {
      await markStudentAsSeen(student.id);
      onStudentUpdate();
    } catch (error) {
      console.error("Erreur lors du marquage comme vu:", error);
    }
  };

  const markAsContacted = async () => {
    try {
      await markStudentAsContacted(student.id);
      onStudentUpdate();
    } catch (error) {
      console.error("Erreur lors du marquage comme contacté:", error);
    }
  };

  const getTypeStudentLabel = (type: TypeStudent) => {
    switch (type) {
      case TypeStudent.NOUVEAU_BACHELIER:
        return "Nouveau Bachelier";
      case TypeStudent.PAS_ENCORE_BACHELIER:
        return "Pas encore Bachelier";
      case TypeStudent.LICENCE:
        return "Licence";
      case TypeStudent.DIPLOME_SUPERIEUR:
        return "Diplôme Supérieur";
      default:
        return type;
    }
  };

  const getSourceLabel = (source: Source) => {
    switch (source) {
      case Source.BOURSE:
        return "Boursier";
      case Source.CAMPUS_FRANCE:
        return "Payant";
      default:
        return source;
    }
  };

  const getStatusClass = (isSeen: boolean, isContacted: boolean) => {
    if (isContacted) return "success";
    if (isSeen) return "warning";
    return "secondary";
  };

  const getStatusText = (isSeen: boolean, isContacted: boolean) => {
    if (isContacted) return "Contacté";
    if (isSeen) return "Vu";
    return "Nouveau";
  };

  return (
    <Modal className="tpd-modal" show={show} onHide={onHide} centered={true} size="lg">
      <div className="modal-header">
        <div className="tpd-modal-icon">
          <span>
            <Image 
              src={student.profilePicture || "/assets/img/dashboard/profile/reviews-profile-1.png"} 
              alt={`${student.fname} ${student.lname}`}
              width={50}
              height={50}
              className="rounded-circle"
            />
          </span>
        </div>
        <h4 className="tpd-modal-title" id="exampleModalLabel">
          {student.fname} {student.lname}
        </h4>
        <p>{student.email}</p>
        <button 
          onClick={onHide} 
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
        <div className="tpd-modal-content">
          <div className="row">
            <div className="col-md-6">
              <div className="tpd-modal-info mb-3">
                <span>Informations personnelles</span>
                <div className="mt-2">
                  <p><strong>Nom complet:</strong> {student.fname} {student.lname}</p>
                  <p><strong>Email:</strong> <a href={`mailto:${student.email}`}>{student.email}</a></p>
                  <p><strong>Téléphone:</strong> <a href={`tel:${student.phone}`}>{student.phone}</a></p>
                  <p><strong>Pays:</strong> {student.codeCountry}</p>
                  <p><strong>Date de naissance:</strong> {new Date(student.birthDate).toLocaleDateString('fr-FR')}</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="tpd-modal-info mb-3">
                <span>Informations académiques</span>
                <div className="mt-2">
                  <p><strong>École:</strong> {student.school}</p>
                  <p><strong>Année de fin d'études:</strong> {student.yearCompletion}</p>
                  <p><strong>Qualification:</strong> {student.qualification}</p>
                  <p><strong>Type d'étudiant:</strong> {getTypeStudentLabel(student.typeStudent)}</p>
                  <p><strong>Source:</strong> {getSourceLabel(student.source)}</p>
                </div>
              </div>
            </div>
          </div>

          {student.additionalInfo && (
            <div className="tpd-modal-info mb-3">
              <span>Informations supplémentaires</span>
              <div className="mt-2">
                <p>{student.additionalInfo}</p>
              </div>
            </div>
          )}

          <div className="tpd-modal-info mb-3">
            <span>Statut</span>
            <div className="mt-2">
              <span className={`tpd-badge ${getStatusClass(student.isSeen, student.isContacted)}`}>
                {getStatusText(student.isSeen, student.isContacted)}
              </span>
              <p className="mt-2">
                <small className="text-muted">
                  Candidature soumise le {new Date(student.createdAt).toLocaleDateString('fr-FR')} à {new Date(student.createdAt).toLocaleTimeString('fr-FR')}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="modal-footer">
        <div className="tpd-modal-btn">
          <button type="button" className="tpd-btn-cancel" onClick={onHide}>
            Fermer
          </button>
        </div>
    
      </div>
    </Modal>
  );
} 