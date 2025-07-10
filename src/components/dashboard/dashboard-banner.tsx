import Link from "next/link";
import Image from "next/image";
import dashboard_shape from "@/assets/img/dashboard/bg/dashboard-bg-shape-1.jpg";
import instructor_img from "@/assets/img/testimonial/Dan.png";
import student_img from "@/assets/img/dashboard/profile/dashboard-profile-2.jpg";

type IProps = { 
  studentBanner?: boolean;
}
export default function DashboardBanner({studentBanner}: IProps) {
  return (
    <section className="tp-dashboard-banner-wrap">
      <div className="tp-dashboard-banner-shape">
        <Image src={dashboard_shape} alt="shape" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="tp-dashboard-banner-bg mt-30"
              data-background="/assets/img/dashboard/bg/dashboard-bg-1.jpg"
              style={{ backgroundImage: "url(/assets/img/dashboard/bg/dashboard-bg-1.jpg)" }}
            >
              <div className="tp-instructor-wrap d-flex justify-content-between">
                <div className="tp-instructor-info d-flex">
                  <div className="tp-instructor-avatar">
                    <Image
                      src={studentBanner?student_img:instructor_img}
                      alt="profile"
                      style={{ height: "50" }}
                    />
                  </div>
                  <div className="tp-instructor-content">
                    <h4 className="tp-instructor-title">Dan Nguekou</h4>
                
                  </div>
                </div>
                <div className="tp-instructor-course-btn">
                  <Link
                    className="tp-btn-add-course"
                    href="/dashboard/create-new-course"
                  >
                  Retour sur L&apos;accueil
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
