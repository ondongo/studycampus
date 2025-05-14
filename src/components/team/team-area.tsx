import React from "react";
import TeamSlider from "./slider/team-slider";
import shape_underline from "@/assets/img/unlerline/team-2-svg-1.svg";
import Image from "next/image";
import { NextArrowTwo, PrevArrowTwo } from "../svg";

export default function TeamArea() {
  return (
    <section className="team-area pt-100 mb-100">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6 col-md-8">
            <div className="tp-section mb-45">
              <h5 className="tp-section-3-subtitle">Our Team</h5>
              <h3 className="tp-section-3-title">
                Meet Our{' '}
                <span>
                  Teachers
                  <Image
                    className="tp-underline-shape-9 wow bounceIn"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                    src={shape_underline}
                    alt="shape-underline"
                  />
                </span>
              </h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-4">
            <div className="tp-team-2-arrow d-flex align-items-center justify-content-md-end mb-55">
              <div className="tp-team-2-prev pointer">
                <span>
                  <PrevArrowTwo />
                </span>
              </div>
              <div className="tp-team-2-next pointer">
                <span>
                  <NextArrowTwo />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* team slider */}
        <TeamSlider />
        {/* team slider */}
      </div>
    </section>
  );
}
