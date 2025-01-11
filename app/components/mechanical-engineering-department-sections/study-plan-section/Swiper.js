import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CustomSwiper = ({ slides, navigation, autoplay }) => {
  const swiperRef = useRef();
  return (
    <div className="inner-slider">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper z-[-10]"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative img-container">
              <img
                src={slide.src}
                alt={slide.alt}
                className="slider-item-img"
              />
              <div className="inner-slider-nav-buttons">
                <button
                  className="next-btn"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <img src="/images/innerSlider-next-btn.png" alt="prev-btn" />
                </button>
                <button
                  className="prev-btn"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <img src="/images/innerSlider-prev-btn.png" alt="next-btn" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
