import Image from "next/image";
import shape_underline from "@/assets/img/unlerline/cta-2-svg-1.svg";
import { CheckSvg, EmailTwo } from "../svg";

export default function CtaTwo() {
  return (
    <section className="cta-area tp-cta-2-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-lg-10">
            <div className="tp-cta-2-wrapper text-center">
              <h2 className="tp-cta-2-title">
                Get Started With {' '}
                <span>
                  Acadia
                  <Image
                    className="tp-underline-shape-12 wow bounceIn"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                    src={shape_underline}
                    alt="shape-underline"
                  />
                </span>
                Now{" "}
              </h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <div className="tp-cta-2-form">
                <form action="#">
                  <span>
                    <EmailTwo />
                  </span>
                  <input type="text" placeholder="Enter your email address" />
                  <div className="tp-cta-2-btn">
                    <button className="tp-btn-round">Subscribe!</button>
                  </div>
                </form>
              </div>
              <div className="tp-cta-2-info-list">
                <span>
                  <span>
                    <CheckSvg />
                  </span>
                  Easy to Access
                </span>
                <span>
                  <span>
                    <CheckSvg />
                  </span>
                  No Credit card
                </span>
                <span>
                  <span>
                    <CheckSvg />
                  </span>
                  85,000 student onboard with us
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
