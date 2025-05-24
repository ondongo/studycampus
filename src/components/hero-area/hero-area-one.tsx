"use client";
import Link from "next/link";
import React from "react";
import { EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { RightArrow } from "../svg";
import { useTranslations } from 'next-intl';

//
const slider_options: SwiperOptions = {
  slidesPerView: 1,
  effect: "fade",
  autoplay: {
    delay: 3500,
  },
  pagination: {
    el: ".tp-program-dot",
    clickable: true,
    type: "bullets",
  },
};

export default function HeroAreaOne() {
  const t = useTranslations('home');

  const heroSliderData = [
    {
      id: 1,
      subtitle: t('campus_france_steps'),
      title: t('campus_france_desc'),
      bgImg: "/assets/img/hero/hero-bg-3.jpg",
    },
    {
      id: 2,
      subtitle: t('scholarships_financial_aid'),
      title: t('scholarships_desc'),
      bgImg: "/assets/img/hero/2149156390.jpg",
    },
  ];

  return (
    <section className="tp-hero-area">
      <Swiper
        {...slider_options}
        modules={[EffectFade, Pagination]} 
        className="swiper tp-slider-active"
      >
        {heroSliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="tp-hero-item">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-9 col-lg-11">
                    <div className="tp-hero-wrapper">
                      <span className="tp-hero-subtitle">{item.subtitle}</span>
                      <h2
                        className="text-white fw-500"
                        style={{ lineHeight: "1.5" }}
                      >
                        {item.title}
                      </h2>
                      <div className="tp-hero-btn">
                        <Link className="tp-btn" href="/university-application-form">
                          {t('start_procedure')}
                          <span>
                            <RightArrow />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tp-hero-bg"
                style={{ backgroundImage: `url(${item.bgImg})` }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
