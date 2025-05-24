"use client";
import Slider from "react-slick";
import { useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import shape_underline from "@/assets/img/unlerline/testimonial-2-svg-1.svg";
import quate_1 from "@/assets/img/testimonial/testimonial-shape-1.png";
import quate_2 from "@/assets/img/testimonial/testimonial-shape-3.png";
import { testimonial_two_data } from "@/data/testimonial-data";

// slider options
const avt_slider_opt = {
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  centerMode: true,
  centerPadding: "0px",
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};
// testimonial slider options
const testi_slider_opt = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
};

// nav avatars
const nav_avatars = [
  "/assets/img/testimonial/Mira.png",
  "/assets/img/testimonial/Dan.png",
  "/assets/img/testimonial/Yohane.jpeg",
  "/assets/img/testimonial/Kennedy.png",
  "/assets/img/testimonial/Screenshot_2025-05-24_at_18.56.21-removebg-preview.png",
  "/assets/img/testimonial/test-2-avatar-1.png",
];

export default function TestimonialTwo() {
  const t = useTranslations("home");
  const [slider1, setSlider1] = useState<Slider | null>(null);
  const [slider2, setSlider2] = useState<Slider | null>(null);
  const sliderRef = useRef<Slider | null>(null);

  const sliderPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const sliderNext = () => {
    sliderRef.current?.slickNext();
  };
  return (
    <section className="testimonial-area pb-85 pt-105">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-lg-8">
            <div className="tp-testimonial-section">
              <div className="tp-section text-center mb-40">
                <h5 className="tp-section-3-subtitle">{t("testimonials")}</h5>

                <h3 className="tp-section-3-title">
                  {t("intro_part1")} &nbsp;
                  <span>
                    {t("intro_highlight")}&nbsp;
                    <Image
                      className="tp-underline-shape-8 wow bounceIn"
                      data-wow-duration="1.5s"
                      data-wow-delay=".4s"
                      src={shape_underline}
                      alt="shape-underline"
                    />
                  </span>{" "}
                  {t("intro_part2")}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-8">
            <div className="tp-testimonial-2-avatar-active p-relative">
              <button
                onClick={sliderPrev}
                type="button"
                className="slick-prev slick-arrow"
              >
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <Slider
                {...avt_slider_opt}
                asNavFor={slider1 as Slider}
                ref={(slider) => setSlider2(slider)}
              >
                {nav_avatars.map((avatar, i) => (
                  <div key={i} className="tp-testimonial-2-avatar-item">
                    <Image src={avatar} alt="avatar" width={74} height={74} />
                  </div>
                ))}
              </Slider>
              <button
                onClick={sliderNext}
                type="button"
                className="slick-next slick-arrow"
              >
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Slider
              {...testi_slider_opt}
              asNavFor={slider2 as Slider}
              ref={(slider) => {
                setSlider1(slider);
                sliderRef.current = slider;
              }}
              className="tp-testimonial-2-active"
            >
              {t.raw("testimonial_two_data").map((item: any) => (
                <div
                  key={item.id}
                  className="tp-testimonial-2-item text-center"
                >
                  <div className="tp-testimonial-2-avatar-info">
                    <h4 className="tp-testimonial-2-avatar-title">
                      {item.name}
                    </h4>
                    <span>{item.position}</span>
                    <div className="tp-testimonial-2-avatar-rating">
                      {[...Array(item.rating)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                  </div>
                  <div className="tp-testimonial-2-content p-relative">
                    <p>{item.testimonial}</p>
                    <div className="tp-testimonial-2-shape">
                      <div className="shape-1">
                        <Image src={quate_1} alt="quate" />
                      </div>
                      <div className="shape-2">
                        <Image src={quate_2} alt="quate" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
