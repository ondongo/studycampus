"use client";

import React, { useState } from "react";
import { UpdateAnnonceData } from "@/types/annonce";

interface AnnonceFormProps {
  initialData?: UpdateAnnonceData;
  onSubmit: (data: any, zipFile?: File) => Promise<void>;
  onCancel: () => void;
  isEditing?: boolean;
}

export default function AnnonceForm({ 
  initialData, 
  onSubmit, 
  onCancel, 
  isEditing = false 
}: AnnonceFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    etat: initialData?.etat ?? true
  });
  
  const [zipFile, setZipFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/zip') {
      setZipFile(file);
      setErrors(prev => ({ ...prev, zipFile: "" }));
    } else if (file) {
      setErrors(prev => ({ ...prev, zipFile: "Veuillez sélectionner un fichier ZIP" }));
      setZipFile(null);
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
      await onSubmit(formData, zipFile || undefined);
      // Reset form after successful submission
      if (!isEditing) {
        setFormData({ title: "", description: "", etat: true });
        setZipFile(null);
      }
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      setErrors({ submit: "Une erreur est survenue lors de la sauvegarde" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-header bg-transparent border-0">
        <h5 className="card-title mb-0">
          <i className="fas fa-bullhorn text-primary me-2"></i>
          {isEditing ? "Modifier l'Annonce" : "Nouvelle Annonce"}
        </h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          {errors.submit && (
            <div className="alert alert-danger" role="alert">
              {errors.submit}
            </div>
          )}
          
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Titre <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${errors.title ? 'is-invalid' : ''}`}
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Titre de l'annonce"
              required
            />
            {errors.title && (
              <div className="invalid-feedback">{errors.title}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description <span className="text-danger">*</span>
            </label>
            <textarea
              className={`form-control ${errors.description ? 'is-invalid' : ''}`}
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Description de l'annonce"
              required
            />
            {errors.description && (
              <div className="invalid-feedback">{errors.description}</div>
            )}
          </div>

          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="etat"
                name="etat"
                checked={formData.etat}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="etat">
                Annonce active
              </label>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="zipFile" className="form-label">
              Fichier ZIP (optionnel)
            </label>
            <input
              type="file"
              className={`form-control ${errors.zipFile ? 'is-invalid' : ''}`}
              id="zipFile"
              accept=".zip"
              onChange={handleFileChange}
            />
            {errors.zipFile && (
              <div className="invalid-feedback">{errors.zipFile}</div>
            )}
            <div className="form-text">
              Vous pouvez joindre un fichier ZIP contenant des documents liés à cette annonce.
            </div>
          </div>

          <div className="d-flex gap-2">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                  Enregistrement...
                </>
              ) : (
                <>
                  <i className="fas fa-save me-2"></i>
                  {isEditing ? "Modifier" : "Créer"}
                </>
              )}
            </button>
            
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
              disabled={loading}
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 