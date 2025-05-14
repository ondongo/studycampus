import { Metadata } from "next";
import ApplicationForm from "@/components/form/application-form";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";

export const metadata: Metadata = {
  title: "University Application Form - Acadia",
};

export default function UniversityApplicationFormPage() {
  return (
    <main>
            <BreadcrumbTwo
        title="Schedule a Tour"
        subtitle="Schedule a Tour"
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
                  Ready to find out what sets us apart?
                </p>
             
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
