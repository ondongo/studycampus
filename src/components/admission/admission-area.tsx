import Image from "next/image";
import overview_img_1 from "@/assets/img/course/details/admisson-overview-1.jpg";
import overview_img_2 from "@/assets/img/course/details/admisson-overview-2.jpg";
import { RightArrowSeven } from "../svg";
import Link from "next/link";

export default function AdmissionArea() {
  return (
    <section className="tp-admission-overview-area grey-bg pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="tp-admission-overview-heading wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h3 className="tp-admission-overview-title">Afford Acadia</h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="tp-admission-overview-wrapper wow fadeInUp"
              data-wow-delay=".5s"
            >
              <p>
                At Acadia University, we prepare you to launch your career by
                providing a supportive, creative, and professional environment
                from which to learn practical skills, build a network of
                industry contacts.
              </p>
              <p>
                Acadia is affordable for all admitted students. Financial aid
                covers all demonstrated need for all students, regardless of
                citizenship or citizenship status. Families making under{" "}
                <span>$85,000</span> a year pay nothing for their students
                education, and families making between{" "}
                <span>$85,000-$150,000 pay 0-10% of their incomes.</span>
              </p>
              <div className="tp-admission-overview-btn mt-50">
                <Link className="tp-btn" href="/university-financial">
                  Learn more <br />
                  About financial aid{" "}
                  <span>
                    <RightArrowSeven />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AdmissionCtaArea() {
  return (
    <section className="tp-admission-cta-area grey-bg pb-160">
      <div className="container">
        <div className="tp-admission-cta-box">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="tp-admission-cta-heading wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h3 className="tp-admission-cta-title">
                  Calculate Your <br /> Estimated Scholarship.
                </h3>
                <p>
                  How affordable is Harvard? See for yourself with our <br />
                  Net Price Calculator.
                </p>
                <div className="tp-admission-cta-btn">
                  <Link className="tp-btn" href="/university-tuition-fees">
                    Net Price Calculator{" "}
                    <span>
                      <RightArrowSeven />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="tp-admission-cta-thumb wow fadeInUp"
                data-wow-delay=".5s"
              >
                <Image
                  src={overview_img_1}
                  alt="overview-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AdmissionApplyArea() {
  return (
    <section className="tp-admission-apply-area grey-bg pt-40 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="tp-admission-apply-thumb p-relative wow fadeInUp"
              data-wow-delay=".3s"
            >
              <Image
                src={overview_img_2}
                alt="overview-img"
                style={{ height: "auto" }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="tp-admission-apply-heading wow fadeInUp"
              data-wow-delay=".5s"
            >
              <h3 className="tp-admission-apply-title">Apply for 2024</h3>
              <p>
                We’ll guide you through the Common Application <br />
                or Coalition Application, Powered by Scoir, and answer <br />
                any questions you have along the way.
              </p>
              <div className="tp-admission-apply-btn">
                <Link className="tp-btn" href="/university-apply">
                  How To Apply
                  <span>
                    <RightArrowSeven />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
