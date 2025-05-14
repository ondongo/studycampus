'use client';
import Link from "next/link";
import Image from "next/image";
import { SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { gym_trainer_data } from "@/data/team-data";

const slider_options: SwiperOptions = {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    "1200": {
      slidesPerView: 2,
    },
    "992": {
      slidesPerView: 2,
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

export default function TeamSliderTwo() {
  return (
    <Swiper {...slider_options} className="tp-trainer-5-active">
      {gym_trainer_data.map((item) => (
        <SwiperSlide key={item.id} className="tp-trainer-5-item">
          <div className="tp-trainer-5-thumb">
            <Image
              src={item.image}
              alt={item.name}
              width={301}
              height={421}
              style={{ height: "auto" }}
            />
          </div>

          <div className="tp-trainer-5-box">
            <div className="tp-trainer-5-content">
              <div className="tp-trainer-5-info">
                <h4 className="tp-trainer-5-title">
                  <Link href="/my-profile">{item.name}</Link>
                </h4>
                <span>{item.title}</span>
              </div>
              <div className="tp-trainer-5-social">
                {item.socials.map((social) => (
                  <a href={social.link} key={social.id} target="_blank">
                    <i className={social.iconCls}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
