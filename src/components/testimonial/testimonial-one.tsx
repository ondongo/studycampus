import Image from "next/image";
import { Shape } from "../svg";
import VideoOne from "../video/video-provider";
import TestimonialSliderOne from "./testimonial-slider-1";
import shape_1 from "@/assets/img/testimonial/testimonial-shape-1.png";
import shape_2 from "@/assets/img/testimonial/testimonial-shape-2.png";
import shape_3 from "@/assets/img/testimonial/testimonial-shape-3.svg";

export default function TestimonialOne() {
  return (
    <section
      className="testimonial-area tp-testimonial-bg fix p-relative"
      style={{ backgroundImage: `url(/assets/img/bg/testimonial-bg-2.jpg)` }}
    >
      <div className="tp-testimonial-themebg">
        <span></span>
        <div className="tp-testimonial-themebg-shape">
          <Shape />
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="tp-video-wrap d-flex">
              <div className="tp-video-icon text-center">
                {/* Video area */}
                <VideoOne cls="video-border-animation">
                  <span>
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 1.83167C0 1.0405 0.875246 0.562658 1.54076 0.990487L14.6915 9.44454C15.3038 9.83817 15.3038 10.7333 14.6915 11.1269L1.54076 19.5809C0.875246 20.0088 0 19.5309 0 18.7398V1.83167Z"
                        fill="currentColor"
                      />
                   </svg>
                </span>
                </VideoOne>
                {/* Video area */}
                <p>Video Tour in logo</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="tp-testimonial-wrapper wow fadeInRight"
              data-wow-delay=".3s"
            >
              <div className="tp-section mb-40">
                <h5 className="tp-section-subtitle">Testimonial</h5>
                <h3 className="tp-section-title">What Students Says</h3>
              </div>
              <div className="tp-testimonial-shape">
                <div className="tp-testimonial-shape-1">
                  <Image src={shape_1} alt="testimonial-shape" />
                </div>
                <div className="tp-testimonial-shape-2">
                  <Image src={shape_2} alt="testimonial-shape" />
                </div>
                <div
                  className="tp-testimonial-shape-3 wow bounceIn"
                  data-wow-duration="1.5s"
                  data-wow-delay=".4s"
                >
                  <Image src={shape_3} alt="testimonial-shape" />
                </div>
              </div>
              {/* Testimonial Slider */}
              <TestimonialSliderOne />
              {/* Testimonial Slider */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
