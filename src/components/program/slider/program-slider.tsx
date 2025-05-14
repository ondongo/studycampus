'use client';
import Image from "next/image";
import { SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { university_classic_program_data } from "@/data/program-data";
import tag_svg from '@/assets/img/icon/program-tag-1.svg';
import Link from "next/link";

const slider_options: SwiperOptions = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".tp-program-dot",
    clickable: true,
  },
  breakpoints: {
    "1200": {
      slidesPerView: 3,
    },
    "992": {
      slidesPerView: 3,
    },
    "768": {
      slidesPerView: 2,
    },
    "576": {
      slidesPerView: 1,
    },
    "0": {
      slidesPerView: 1,
    },
  },
};

export default function ProgramSlider() {
  return (
    <Swiper
      {...slider_options}
      modules={[Pagination]}
      className="swiper tp-program-active wow fadeInUp"
      data-wow-delay=".6s"
    >
      {university_classic_program_data.slice(0, 4).map((item) => (
        <SwiperSlide
          key={item.id}
          className="tp-program-item grey-bg mb-50"
        >
          <div className="tp-program-thumb fix">
            <Link href="/university-application-form">
              <Image
                src={item.img}
                alt="program-thumb"
                width={350}
                height={198}
                style={{height:'auto'}}
              />
            </Link>
          </div>
          <div className="tp-program-content">
            <h3 className="tp-program-title">
              <Link href="/university-application-form">{item.title}</Link>
            </h3>
            <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
            <div className="tp-program-tag">
              <p>
                <span>
                  <Image
                    src={tag_svg}
                    alt="program-icon"
                  />
                </span>
                {item.category}
              </p>
            </div>
          </div>
          <div className="tp-program-btn">
            <Link href="/university-application-form">Apply Now</Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
