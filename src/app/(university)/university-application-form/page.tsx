import { Metadata } from "next";
import ApplicationForm from "@/components/form/application-form";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";

export const metadata: Metadata = {
  title: "Demande d'accompagnement - yébaschool",
};

export default function UniversityApplicationFormPage() {
  return (
    <main>
      <BreadcrumbTwo
        title="Demande d'accompagnement (Arrive bientôt)"
        subtitle="Accompagnement personnalisé"
        admission={true}
      />

      {/* application area start */}
      <section className="tp-application-area grey-bg pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="tp-application-heading wow fadeInUp"
                data-wow-delay=".3s"
              >
                <p className="tp-application-subtitle">
                  Vous avez besoin d’aide pour constituer votre dossier ? 
                </p>
                <h4 className="pt-40">
                  Remplissez ce formulaire pour bénéficier d’un accompagnement personnalisé.
                </h4>
              </div>

              <div
                className="tp-application-from-box wow fadeInUp"
                data-wow-delay=".5s"
              >
                {/* form area start */}
                <ApplicationForm />
                {/* form area end */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* application area end */}
    </main>
  );
}
