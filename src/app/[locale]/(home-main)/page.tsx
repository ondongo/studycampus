import React from "react";
import { Metadata } from "next";
import HeroAreaOne from "@/components/hero-area/hero-area-one";
import ServiceOne from "@/components/service/service-one";
import AboutOne from "@/components/about/about-one";
import TestimonialTwo from "@/components/testimonial/testimonial-two";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Blessings Travels",
};

export default async function Home({ params }: any) {
  await setRequestLocale(params.locale);
  return (
    <main>
      {/* hero area start */}
      <HeroAreaOne />
      {/* hero area end */}

      {/* service area start */}
      <ServiceOne />
      {/* service area end */}

      {/* about area start */}
      <AboutOne />
      {/* about area end */}

      {/* testimonial area start */}
      <TestimonialTwo />
      {/* program area end */}

      {/* cta area start */}

      {/* cta area end */}
    </main>
  );
}
