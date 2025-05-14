'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import Image from "next/image";
import brand_img_1 from "@/assets/img/brand/brand-5-logo-1.png";
import brand_img_2 from "@/assets/img/brand/brand-5-logo-2.png";
import brand_img_3 from "@/assets/img/brand/brand-5-logo-3.png";
import brand_img_4 from "@/assets/img/brand/brand-5-logo-4.png";
import brand_img_5 from "@/assets/img/brand/brand-5-logo-5.png";
import brand_img_6 from "@/assets/img/brand/brand-5-logo-6.png";

// brands 
const brands = [
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
  brand_img_6,
  brand_img_2,
  brand_img_4,
];

// slider option
const slider_option: SwiperOptions = {
  slidesPerView: 6,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    "1200": {
      slidesPerView: 6,
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
      slidesPerView: 1,
    },
  },
};

export default function BrandSlider() {
  return (
    <Swiper {...slider_option} className="swiper tp-brand-5-active">
      {brands.map((brand, index) => (
        <SwiperSlide key={index}>
          <div className="tp-brand-5-item">
            <Image src={brand} alt="logo" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
