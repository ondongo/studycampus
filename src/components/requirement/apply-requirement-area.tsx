import React from "react";
import { HandCheck } from "../svg";
import Link from "next/link";

const scholarshipRequirements = [
  "Remplir le formulaire de demande de bourse disponible en ligne.",
  "Préparer un dossier scolaire complet avec diplômes et relevés de notes.",
  "Rédiger une lettre de motivation expliquant vos objectifs et vos besoins financiers.",
  "Fournir les justificatifs de votre situation familiale ou financière (si nécessaire).",
  "Être inscrit(e) ou en cours d’inscription dans un établissement partenaire ou reconnu.",
  "Accompagnement pour les démarches Campus France et reconnaissance de diplôme inclus.",
];

const scholarshipDeadlines = [
  {
    category: "1ère session",
    date: "15 octobre",
    decision: "Réponse sous 2 semaines",
  },
  {
    category: "2ème session",
    date: "15 janvier",
    decision: "Réponse sous 2 semaines",
  },
  {
    category: "Session exceptionnelle",
    date: "15 mars",
    decision: "Traitement rapide",
  },
];

export default function ScholarshipRequirement() {
  return (
    <section className="tp-apply-requirement-area tp-apply-requirement-bg pt-110 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="tp-apply-requirement-box">
              <h3 className="tp-apply-process-title">
                Accompagnement admnistatives
              </h3>
              <span>Nous vous accompagnons dans toutes les étapes :</span>
              <div className="tp-apply-requirement-bullet mb-55">
                {scholarshipRequirements.map((requirement, index) => (
                  <p key={index}>
                    <span><HandCheck /></span>
                    <i>{requirement}</i>
                  </p>
                ))}
              </div>
              <div className="tp-apply-requirement-btn">
                <Link className="tp-btn" href="/university-application-form">
                  Remplir le formulaire de bourse
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="tp-apply-dedline-box">
              <h4 className="tp-apply-dedline-wrap-title">Dates limites</h4>
              <div className="tp-apply-dedline-wrapper">
                {scholarshipDeadlines.map((deadline, index) => (
                  <div
                    className={`tp-apply-dedline-wrap d-flex align-items-center justify-content-between ${
                      index === scholarshipDeadlines.length - 1 ? "b-none" : ""
                    }`}
                    key={index}
                  >
                    <div className="tp-apply-dedline-content">
                      <span>{deadline.category}</span>
                      <p>{deadline.date}</p>
                    </div>
                    <div className="tp-apply-dedline-date">
                      <p>{deadline.decision}</p>
                    </div>
                  </div>
                ))}
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
