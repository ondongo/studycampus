"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import { high_school_program_data } from "@/data/program-data";
import { RightArrowFive } from "@/components/svg";

const slider_options: SwiperOptions = {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".tp-program-4-next",
    prevEl: ".tp-program-4-prev",
  },
  breakpoints: {
    "1200": {
      slidesPerView: 4,
    },
    "992": {
      slidesPerView: 3,
    },
    "768": {
      slidesPerView: 2,
    },
    "576": {
      slidesPerView: 2,
    },
    "0": {
      slidesPerView: 1,
    },
  },
};

export default function ProgramSliderTwo() {
  return (
    <div className="swiper wow fadeInUp" data-wow-delay=".3s">
      <Swiper
        {...slider_options}
        modules={[Navigation]}
        className="tp-program-4-active"
      >
        {high_school_program_data.map((item) => (
          <SwiperSlide key={item.id} className="tp-program-4-item">
            <div className="tp-program-4-thumb">
              <Image
                src={item.img}
                alt={item.title}
                width={468}
                height={543}
                style={{ height: "auto" }}
              />
            </div>
            <div className="tp-program-4-content">
              <h3 className="tp-program-4-title">
                <Link href="/university-program">{item.title}</Link>
              </h3>
              <span>{item.description}</span>
              <div className="tp-program-4-btn">
                <Link href="/university-program">
                  <span>
                    <RightArrowFive />
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
