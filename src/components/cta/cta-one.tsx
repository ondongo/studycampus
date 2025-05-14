import Image from "next/image";
import Link from "next/link";
import cta_logo from '@/assets/img/cta/cta-logo-1.png';
import cta_shape from '@/assets/img/cta/cta-shape-1.png';
import { RightArrow } from "../svg";

export default function CtaOne() {
  return (
    <section
      className="cta-area tp-cta-bg grey-bg"
      data-background="assets/img/cta/cta-bg-1.jpg"
      style={{ backgroundImage: "url(/assets/img/cta/cta-bg-1.jpg)" }}
    >
      <div className="container">
        <div
          className="row align-items-center wow fadeInUp"
          data-wow-delay=".2s"
        >
          <div className="col-xxl-10 col-lg-9">
            <div className="tp-cta-wrapper d-flex align-items-center">
              <div className="tp-cta-logo">
                <Link href="/">
                  <Image src={cta_logo} alt="cta-logo" />
                </Link>
              </div>
              <div className="tp-cta-content">
                <span>COURSES FOR FREE, REGISTER NOW</span>
                <h3 className="tp-cta-title">
                  CREATIVE IN RESEARCH AND TEACHING.
                </h3>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-lg-3">
            <div className="tp-cta-btn-wrap">
              <div className="tp-cta-btn text-lg-end">
                <Link className="tp-btn" href="/university-apply">
                  Apply Now{" "}
                  <span>
                    <RightArrow clr="currentColor"/>
                  </span>
                </Link>
              </div>
              <div className="tp-cta-shape-1">
                <Image src={cta_shape} alt="shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
