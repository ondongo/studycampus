"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import shape from "@/assets/img/instagram/instagram-shape.svg";

const instagramData = [
  {
    id: 1,
    link: "https://www.instagram.com",
    src: "/assets/img/instagram/instagram-thumb-1.jpg",
  },
  {
    id: 2,
    link: "https://www.instagram.com",
    src: "/assets/img/instagram/instagram-thumb-2.jpg",
  },
  {
    id: 3,
    link: "https://www.instagram.com",
    src: "/assets/img/instagram/instagram-thumb-3.jpg",
  },
  {
    id: 4,
    link: "https://www.instagram.com",
    src: "/assets/img/instagram/instagram-thumb-4.jpg",
  },
  {
    id: 5,
    link: "https://www.instagram.com",
    src: "/assets/img/instagram/instagram-thumb-5.jpg",
  },
  {
    id: 6,
    link: "https://www.instagram.com",
    src: "/assets/img/instagram/instagram-thumb-2.jpg",
  },
];

// swiper options
const swiper_options: SwiperOptions = {
  slidesPerView: 5,
  spaceBetween: 10,
  freeMode: false,
  loop: true,
  autoplay: {
    delay: 3500,
  },
  breakpoints: {
    "1200": {
      slidesPerView: 5,
    },
    "992": {
      slidesPerView: 4,
    },
    "768": {
      slidesPerView: 3,
    },
    "576": {
      slidesPerView: 2,
    },
    "0": {
      slidesPerView: 2,
    },
  },
};

export default function InstagramArea() {
  return (
    <div className="instagram-area tp-instagram-wrapper grey-bg pb-20">
      <Swiper
        {...swiper_options}
        className="swiper tp-instagram-active wow fadeInUp"
        data-wow-delay=".2s"
      >
        {instagramData.map((data) => (
          <SwiperSlide key={data.id} className="tp-instagram-item">
            <a className="popup-image" href={data.link} target="_blank">
              <Image
                src={data.src}
                alt="instagram-thumb"
                width={373}
                height={367}
                style={{height:"auto" }}
              />
            </a>
            <div className="tp-instagram-shape">
              <Image src={shape} alt="shape" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
