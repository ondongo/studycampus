"use client";
import { useTranslations } from 'next-intl';
import {
  BusinessSvg,
} from "@/components/svg";

export default function DeadlinesArea() {
  const t = useTranslations('university_deadlines');

  const deadlines_data = [
    {
      id: 1,
      icon: <BusinessSvg />,
      title: t('deadlines_list.0.event'),
      date: t('deadlines_list.0.date'),
      scheduleData: [
        {
          id: 1,
          title: t('deadlines_list.1.event'),
          date: t('deadlines_list.1.date'),
        },
        {
          id: 2,
          title: t('deadlines_list.2.event'),
          date: t('deadlines_list.2.date'),
        },
        {
          id: 3,
          title: t('deadlines_list.3.event'),
          date: t('deadlines_list.3.date'),
        },
        {
          id: 4,
          title: t('deadlines_list.4.event'),
          date: t('deadlines_list.4.date'),
          isLast: true,
        },
      ],
    },
    {
      id: 2,
      icon: <BusinessSvg />,
      title: "Campus France – Voie privée",
      date: "Rentrée octobre 2024",
      scheduleData: [
        {
          id: 1,
          title: "Début des inscriptions en ligne",
          date: "Lundi 8 avril 2024",
        },
        {
          id: 2,
          title: "Date limite de dépôt des dossiers",
          date: "Vendredi 14 juin 2024",
        },
        {
          id: 3,
          title: "Entretien Campus France",
          date: "Juin – Juillet 2024",
        },
        {
          id: 4,
          title: "Réponse des écoles",
          date: "Août 2024",
        },
        {
          id: 5,
          title: "Début de la rentrée",
          date: "Lundi 30 septembre 2024",
          isLast: true,
        },
      ],
    },
    {
      id: 3,
      icon: <BusinessSvg />,
      title: "Reconnaissance de diplôme",
      date: "Campagne 2024",
      scheduleData: [
        {
          id: 1,
          title: "Préparation du dossier",
          date: "Mai – Juin 2024",
        },
        {
          id: 2,
          title: "Dépôt de la demande",
          date: "Juillet 2024",
        },
        {
          id: 3,
          title: "Analyse du dossier",
          date: "Août – Septembre 2024",
        },
        {
          id: 4,
          title: "Réponse de l'organisme",
          date: "Octobre 2024",
        },
        {
          id: 5,
          title: "Utilisation de l'attestation",
          date: "Dès réception du document",
          isLast: true,
        },
      ],
    },
  ];

  return (
    <section className="tp-tution-area grey-bg pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {deadlines_data.map((item) => (
              <div key={item.id} className="tp-dates-box mb-20">
                <div className="tp-tution-table tp-dates-table">
                  <h3 className="tp-dates-title">
                    <span>{item.icon}</span>
                    {item.title}
                  </h3>
                  <ul>
                    <li className="tp-tution-table-head">
                      <div className="tp-course-table-row">
                        <div className="tp-dates-month">
                          <h4 className="tp-tution-table-title">{item.date}</h4>
                        </div>
                        <div className="tp-dates-date">
                          <h4 className="tp-tution-table-title">{t('note')}</h4>
                        </div>
                      </div>
                    </li>
                    {item.scheduleData.map((sd) => (
                      <li
                        key={sd.id}
                        className={`tp-tution-table-inner ${
                          sd.isLast ? "none" : ""
                        }`}
                      >
                        <div className="tp-course-table-row">
                          <div className="tp-dates-month">
                            <h4 className="tp-tution-inner">{sd.title}</h4>
                          </div>
                          <div className="tp-dates-date">
                            <h4 className="tp-tution-inner">{sd.date}</h4>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
