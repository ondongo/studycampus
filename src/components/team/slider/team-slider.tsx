"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {online_instructors_data} from "@/data/team-data";
import { PlusSvg } from "../../svg";

const slider_options = {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".tp-team-2-next",
    prevEl: ".tp-team-2-prev",
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

export default function TeamSlider() {
  return (
    <Swiper
      {...slider_options}
      modules={[Navigation]}
      className="swiper tp-team-2-active wow fadeInUp"
      data-wow-delay=".5s"
    >
      {online_instructors_data.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="tp-team-2-item">
            <div className={`tp-team-2-bg ${item.bgClr?item.bgClr:''}`}></div>
            <div className="tp-team-2-social">
              <span className="tp-team-2-social-wrap">
                <PlusSvg />
              </span>
              <div className="tp-team-2-social-icon">
                {item.socials.map((social) => (
                  <a href={social.link} key={social.id} target="_blank">
                    <i className={social.iconCls}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="tp-team-2-thumb">
              <Image
                src={item.image}
                alt={item.name}
                width={250}
                height={372}
                style={{ height: "auto" }}
              />
            </div>
            <div className="tp-team-2-content">
              <h4 className="tp-team-2-title">
                <Link href="/my-profile">{item.name}</Link>
              </h4>
              <span>{item.title}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
