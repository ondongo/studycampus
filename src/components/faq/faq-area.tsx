import Link from "next/link";
import { SearchSvgTwo } from "../svg";
import FaqItem from "./faq-item";

// navData.js
export const navItems = [
  { id: "etudiant", label: "Étudiant", active: true },
  { id: "parent", label: "Parent", active: false },
];


const tabContentData = [
  {
    id: "etudiant",
    label: "etudiant-tab",
    title: "Étudiant",
    topics: [
      { id: 1, text: "Démarches Campus France", href: "#" },
      { id: 2, text: "Bourses d'études", href: "#" },
      { id: 3, text: "Reconnaissance de diplôme", href:"#" },
      { id: 4, text: "Rédaction de CV et LM", href: "#"},
      { id: 5, text: "Entretien pédagogique", href: "#" },
      { id: 6, text: "Logement et vie étudiante", href: "#" },
    ],
    faqs: [
      {
        id: 1,
        question: "Comment créer mon compte sur la plateforme Campus France ?",
        answer:
          "Pour créer un compte, rendez-vous sur le site officiel de Campus France de votre pays, cliquez sur 'Créer mon dossier' et suivez les instructions.",
      },
      {
        id: 2,
        question: "Quels sont les documents requis pour postuler à une bourse ?",
        answer:
          "Cela dépend de la bourse. En général, on demande un CV, une lettre de motivation, les relevés de notes, une preuve d’admission et parfois une lettre de recommandation.",
        active: true,
      },
      {
        id: 3,
        question: "Mon diplôme est-il reconnu en France ?",
        answer:
          "La reconnaissance dépend de l’établissement français. Pour une reconnaissance officielle, vous pouvez passer par ENIC-NARIC France ou vérifier auprès de l'école ciblée.",
      },
      {
        id: 4,
        question: "Quand dois-je passer l’entretien pédagogique ?",
        answer:
          "L’entretien pédagogique est programmé après la soumission de votre dossier. Vous recevrez une convocation par mail via la plateforme Campus France.",
      },
      {
        id: 5,
        question: "Puis-je postuler à plusieurs universités françaises ?",
        answer:
          "Oui, vous pouvez généralement postuler à plusieurs formations via la plateforme, mais il existe un nombre limité selon votre pays (souvent 7 à 10 vœux).",
      },
    ],
  },
  {
    id: "parent",
    label: "parent-tab",
    title: "Parent",
    topics: [
      { id: 1, text: "Suivi du dossier de mon enfant", href: "/suivi-dossier" },
      { id: 2, text: "Frais de scolarité", href: "/frais" },
      { id: 3, text: "Sécurité en France", href: "/securite" },
      { id: 4, text: "Aides financières", href: "/aides-financieres" },
      { id: 5, text: "Hébergement étudiant", href: "/hebergement" },
      { id: 6, text: "Questions fréquentes", href: "/faq-parent" },
    ],
    faqs: [
      {
        id: 6,
        question: "Comment suivre le dossier Campus France de mon enfant ?",
        answer:
          "L'étudiant doit vous transmettre ses identifiants ou vous informer des mises à jour reçues sur la plateforme.",
      },
      {
        id: 7,
        question: "Combien coûte une année d’études en France ?",
        answer:
          "Cela varie selon les établissements. En université publique : environ 170€ à 380€ par an. En école privée : cela peut aller de 3000€ à 10000€ ou plus.",
        active: true,
      },
      {
        id: 8,
        question: "Mon enfant est-il en sécurité en France ?",
        answer:
          "Oui, la France est un pays sûr pour les étudiants. Il est conseillé de respecter les règles locales et de rester vigilant, comme partout ailleurs.",
      },
      {
        id: 9,
        question: "Existe-t-il des aides pour financer les études ?",
        answer:
          "Oui, certaines régions, l'État français ou des institutions privées proposent des aides ou bourses, même pour les étudiants étrangers.",
      },
      {
        id: 10,
        question: "Qui peut héberger mon enfant en France ?",
        answer:
          "Il existe des résidences universitaires, logements privés ou en colocation. Campus France propose aussi des partenariats pour l’hébergement.",
      },
    ],
  },
];


export default function FaqArea() {
  return (
    <section className="tp-faq-area tp-faq-p pt-50 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-instructor-become-tab">
              <ul
                className="nav nav-tabs justify-content-center"
                id="myTab"
                role="tablist"
              >
                {navItems.map((item) => (
                  <li key={item.id} className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${item.active ? "active" : ""}`}
                      id={`${item.id}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#${item.id}`}
                      type="button"
                      role="tab"
                      aria-controls={item.id}
                      aria-selected={item.active}
                      tabIndex={item.active ? 0 : -1}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="tab-content" id="myTabContent">
                {tabContentData.map((tab) => (
                  <div
                    key={tab.id}
                    className={`tab-pane fade ${
                      tab.id === "etudiant" ? "show active" : ""
                    }`}
                    id={tab.id}
                    role="tabpanel"
                    aria-labelledby={tab.label}
                  >
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="tp-faq-wrap">
                          <div className="tp-faq-search">
                            <div className="tp-header-2-search">
                              <form action="#">
                                <input type="text" placeholder="Search..." />
                                <button
                                  className="tp-header-2-search-btn"
                                  type="submit"
                                >
                                  <span>
                                    <SearchSvgTwo />
                                  </span>
                                </button>
                              </form>
                            </div>
                          </div>
                          <div className="tp-faq-sidebar">
                            <h4 className="tp-faq-sidebar-title">
                             Catégories récentes
                            </h4>
                            <ul>
                              {tab.topics.map((topic) => (
                                <li key={topic.id}>
                                  <Link href={topic.href}>{topic.text}</Link>
                                </li>
                              ))}
                            </ul>
               
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="tp-faq-box">
                          <div className="tpd-accordion">
                            <div
                              className="accordion accordion-flush"
                              id={tab.id}
                            >
                              {tab.faqs.map((faq) => (
                                <FaqItem key={faq.id} faq={faq} parentId={tab.id} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
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
