"use client";

import React, { useState } from "react";
import { Etudiant } from "@/types/student";

import Pagination from "@/components/ui/pagination";

interface StudentsTableProps {
  students: Etudiant[];
  totalPages: number;
  totalItems: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onStudentAction: (studentId: string, action: 'seen' | 'contacted') => void;
}

export default function StudentsTable({ 
  students, 
  totalPages, 
  totalItems, 
  currentPage, 
  onPageChange,
  onStudentAction 
}: StudentsTableProps) {
  const [loading, setLoading] = useState<string | null>(null);

  const handleAction = async (studentId: string, action: 'seen' | 'contacted') => {
    setLoading(`${studentId}-${action}`);
    try {
      await onStudentAction(studentId, action);
    } catch (error) {
      console.error('Erreur lors de l\'action:', error);
    } finally {
      setLoading(null);
    }
  };

  const downloadZip = (zipUrl: string, studentName: string) => {
    const link = document.createElement('a');
    link.href = zipUrl;
    link.download = `${studentName}-dossier.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePageClick = (event: { selected: number }) => {
    onPageChange(event.selected + 1);
  };

  const getTypeStudentLabel = (type: string) => {
    switch (type) {
      case 'BOURSE':
        return 'Boursier';
      case 'CAMPUS_FRANCE':
        return 'Payant';
      case 'NOUVEAU_BACHELIER':
        return 'Nouveau Bachelier';
      case 'PAS_ENCORE_BACHELIER':
        return 'Pas encore Bachelier';
      case 'LICENCE':
        return 'Licence';
      case 'DIPLOME_SUPERIEUR':
        return 'Diplôme Supérieur';
      default:
        return type;
    }
  };

  const getTypeStudentBadge = (type: string) => {
    const color = type === 'BOURSE' ? 'primary' : 'info';
    return <span className={`badge bg-${color}`}>{getTypeStudentLabel(type)}</span>;
  };

  const getStatusBadge = (isSeen: boolean, isContacted: boolean) => {
    if (isContacted) {
      return <span className="badge bg-success">Contacté</span>;
    } else if (isSeen) {
      return <span className="badge bg-warning">Vu</span>;
    } else {
      return <span className="badge bg-secondary">Nouveau</span>;
    }
  };

  const getSourceBadge = (source: string) => {
    const color = source === 'BOURSE' ? 'primary' : 'info';
    return <span className={`badge bg-${color}`}>{source}</span>;
  };

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-header bg-transparent border-0 d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">
          <i className="fas fa-users text-primary me-2"></i>
          Liste des Étudiants ({totalItems})
        </h5>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Source</th>
                <th>Type</th>
                <th>Statut</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>
                    <div>
                      <strong>{student.fname} {student.lname}</strong>
                      <br />
                      <small className="text-muted">{student.phone}</small>
                    </div>
                  </td>
                  <td>
                    <a href={`mailto:${student.email}`} className="text-decoration-none">
                      {student.email}
                    </a>
                  </td>
                  <td>{getSourceBadge(student.source)}</td>
                  <td>
                    {getTypeStudentBadge(student.typeStudent)}
                  </td>
                  <td>{getStatusBadge(student.isSeen, student.isContacted)}</td>
                  <td>
                    <small className="text-muted">
                      {new Date(student.createdAt).toLocaleDateString('fr-FR')}
                    </small>
                  </td>
                  <td>
                    <div className="btn-group btn-group-sm" role="group">
                      <button
                        type="button"
                        className={`btn btn-outline-primary ${loading === `${student.id}-seen` ? 'disabled' : ''}`}
                        onClick={() => handleAction(student.id, 'seen')}
                        disabled={loading === `${student.id}-seen`}
                        title="Marquer comme vu"
                      >
                        {loading === `${student.id}-seen` ? (
                          <span className="spinner-border spinner-border-sm" role="status"></span>
                        ) : (
                          <i className="fas fa-eye"></i>
                        )}
                      </button>
                      
                      <button
                        type="button"
                        className={`btn btn-outline-success ${loading === `${student.id}-contacted` ? 'disabled' : ''}`}
                        onClick={() => handleAction(student.id, 'contacted')}
                        disabled={loading === `${student.id}-contacted`}
                        title="Marquer comme contacté"
                      >
                        {loading === `${student.id}-contacted` ? (
                          <span className="spinner-border spinner-border-sm" role="status"></span>
                        ) : (
                          <i className="fas fa-envelope"></i>
                        )}
                      </button>
                      
                      {student.zipUrl && (
                        <button
                          type="button"
                          className="btn btn-outline-info"
                          onClick={() => downloadZip(student.zipUrl, `${student.fname}-${student.lname}`)}
                          title="Télécharger le dossier"
                        >
                          <i className="fas fa-download"></i>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="card-footer bg-transparent border-0">
          <div className="d-flex justify-content-center">
            <Pagination 
              handlePageClick={handlePageClick} 
              pageCount={totalPages} 
              isCenter={true}
              currentPage={currentPage}
            />
          </div>
        </div>
      )}
    </div>
  );
} 