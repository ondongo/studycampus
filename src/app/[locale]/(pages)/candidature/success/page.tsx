import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Mail, Phone, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Candidature soumise avec succès - BlessingSchool",
  description: "Votre candidature a été soumise avec succès. Nous vous recontacterons bientôt.",
};

export default function CandidatureSuccessPage() {
  return (
    <div
      className="tp-main-area"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
      }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <div className="col-lg-8 d-flex align-items-center justify-content-center">
            <div className="card border-0 w-100">
              <div className="card-body text-center p-5">
                <div className="mb-4">
                  <CheckCircle className="text-success" size={80} />
                </div>
                <h2 className="mb-4 text-success">
                  Candidature soumise avec succès !
                </h2>
                <p className="lead mb-4">
                  Nous avons bien reçu votre candidature. Notre équipe va examiner votre dossier 
                  et vous recontacter dans les plus brefs délais.
                </p>
                <div className="alert alert-info mb-4">
                  <h5 className="alert-heading">
                    <i className="fas fa-info-circle me-2"></i>
                    Prochaines étapes
                  </h5>
                  <ul className="mb-0 text-start">
                    <li>Analyse de votre dossier par notre équipe</li>
                    <li>Contact sous 48-72 heures pour un premier échange</li>
                    <li>Prise de rendez-vous pour un accompagnement personnalisé</li>
                    <li>Guidage dans la préparation de votre dossier complet</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 