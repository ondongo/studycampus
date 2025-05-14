import { NextArrowTwo, PrevArrowTwo } from "../svg";
import ProgramSliderTwo from "./slider/program-slider-2";

export default function ProgramAreaThree() {
  return (
    <section className="program-area pb-120 grey-bg pb">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-8">
            <div className="tp-program-4-section mb-60">
              <span className="tp-section-subtitle">LEARN AT YOUR PACE</span>
              <h3 className="tp-section-4-title">
                Academic{" "}
                <span>
                  Programs
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="170"
                    height="12"
                    viewBox="0 0 170 12"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M163.543 11.6881C91.7847 -3.61174 28.9468 5.36254 6.918 11.5745C5.00947 12.1127 2.30014 11.9681 0.866555 11.2516C-0.567032 10.5352 -0.182011 9.51803 1.72652 8.97984C26.0126 2.13138 92.5575 -7.17892 167.812 8.86629C169.887 9.30883 170.614 10.2993 169.435 11.0785C168.257 11.8577 165.618 12.1306 163.543 11.6881Z"
                      fill="#161613"
                    />
                  </svg>
                </span>
              </h3>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tp-program-4-arrow text-start text-lg-end mb-60">
              <div className="tp-program-4-prev pointer">
                <span>
                  <PrevArrowTwo />
                </span>
              </div>
              <div className="tp-program-4-next pointer">
                <span>
                  <NextArrowTwo />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* program slider */}
      <ProgramSliderTwo />
      {/* program slider */}
    </section>
  );
}
