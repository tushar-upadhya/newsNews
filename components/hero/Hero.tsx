"use client";

import "./hero.css";
import AOS from "aos";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect } from "react";
import { heroSlides } from "@/utils/heroSlidesUtils";
import HeroSlides from "./heroSlides/HeroSlides";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <section className="hero-slider" id="hero-slider">
      <div className="container-md" data-aos="fade-in">
        <div className="row">
          <div className="col-12">
            <Swiper>
              {heroSlides.map((slide) => {
                return (
                  <SwiperSlide key={slide.id}>
                    <HeroSlides slide={slide} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
