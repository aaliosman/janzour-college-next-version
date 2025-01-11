"use cleint";
import { useAppContext } from "../../../context/index";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { homePageData } from "../../../data";

const SuccessStorie = () => {
  // const { successStoriesData } = useAppContext();
  const successStoriesData = homePageData && homePageData.data.successStories;

  const swiperRef = useRef();
  const slides = [
    { src: "/images/success-stories.jpg", alt: "Slide 1" },
    { src: "/images/journal-posts-content-img.jpg", alt: "Slide 2" },
    { src: "/images/success-stories.jpg", alt: "Slide 1" },
    { src: "/images/journal-posts-content-img.jpg", alt: "Slide 4" },
  ];

  return (
    <div className="success-stories-section">
      <div className="success-stories-head">
        <div className="success-stories-head-content">
          <p className="success-stories-title">
            {" "}
            <span> قصص نجاح </span>
            الخريجين
          </p>
        </div>
        <hr />
        <div className="success-stories-head-text">
          <p>{successStoriesData.aboutSuccessStories}</p>
        </div>
      </div>

      <div className="success-stories-content">
        <div className="success-stories-content-info">
          <p className="title">{successStoriesData.titleSuccessStorie}</p>
          <p className="success-stories-content-text">
            {successStoriesData.storyContent}
          </p>
        </div>

        <div className="success-stories-content-img">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            dir="rtl"
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper z-[-10]"
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {typeof storyPicture === "object" ? (
              storyPicture.map((slide, i) => {
                return (
                  <SwiperSlide key={i} className="sigle-slide">
                    <img src={slide.src} alt="story-image" />
                  </SwiperSlide>
                );
              })
            ) : (
              <SwiperSlide className="sigle-slide">
                <img
                  src={
                    successStoriesData.storyPicture.length > 0
                      ? successStoriesData.storyPicture
                      : "/images/success-stories.jpg"
                  }
                  alt="success-stories-image"
                />
              </SwiperSlide>
            )}
          </Swiper>
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
      </div>
    </div>
  );
};

export default SuccessStorie;
