import Link from "next/link";

const applicationProcess = [
  {
    step: 1,
    title: "Remplir le formulaire",
    description: `Complétez le formulaire avec vos informations personnelles et académiques. <br/> Ce formulaire nous permet de mieux comprendre votre profil pour mieux vous accompagner.`,
    linkText: "Formulaire de candidature",
    linkHref: "/university-application-form",
  },
  {
    step: 2,
    title: "Prise de rendez-vous",
    description: `Une fois le formulaire soumis, vous serez recontacté pour un rendez-vous <br/> ou vous pouvez directement réserver un créneau. Ce moment nous permet d'échanger sur vos besoins.`,
  },
  {
    step: 3,
    title: "Envoi des documents",
    description: `Nous vous guiderons dans l'envoi de vos documents (diplômes, relevés, etc.) <br/> via notre plateforme sécurisée. Vous ne serez jamais seul dans les démarches.`,
  },
  {
    step: 4,
    title: "Informations sur les frais",
    description: `Une fois votre dossier reçu et analysé, nous vous informerons de façon détaillée <br/> de tous les frais à prévoir. Notre équipe vous accompagne pour chaque étape financière.`,
  },
];

export default function ProcessTwo() {
  return (
    <section className="tp-apply-process-area grey-bg pt-60 pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div id="down" className="tp-apply-process-wrapper">
              <h3 className="tp-apply-process-title">
                Le process sur BlessingsTravels
              </h3>

              {applicationProcess.map((step, index) => (
                <div key={index} className="tp-apply-process-box">
                  <h4 className="tp-apply-process-subtitle">
                    <span>{step.step}</span>
                    {step.title}
                  </h4>
                  <p dangerouslySetInnerHTML={{ __html: step.description }}></p>

                  {step.linkText && step.linkHref && (
                    <Link className="tp-btn mt-30" href={step.linkHref}>
                      {step.linkText}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
