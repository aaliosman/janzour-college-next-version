import React, { useRef } from "react";
import CustomSwiper from "./Swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const StudyPlan = () => {
  const swiperRef = useRef();
  const swiperRef_1 = useRef();

  const slides = [
    { src: "/images/CollegeGradFacts__feature-jpg.webp", alt: "Slide 1" },
    { src: "/images/journal-posts-content-img.jpg", alt: "Slide 2" },
    { src: "/images/CollegeGradFacts__feature-jpg.webp", alt: "Slide 3" },
    { src: "/images/CollegeGradFacts__feature-jpg.webp", alt: "Slide 4" },
  ];

  return (
    <div className="study-plan-section">
      <div className="study-plan-head">
        <div className="study-plan-head-content">
          <p className="study-plan-title">الخطة الدراسية</p>
        </div>
        <hr />
        <div className="study-plan-head-text">
          <p>
            ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل
            الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن
            نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا
            يليق.
          </p>
        </div>
      </div>

      <div className="study-plan-chapterts-container">
        <div className="chapter">
          <div className="swiper-nav-buttons">
            <button
              className="next-btn"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img src="/images/Frame 40.png" alt="next-btn" />
            </button>
            <button
              className="prev-btn"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img src="/images/Frame 74.png" alt="prev-btn" />
            </button>
          </div>
          <Swiper
            className="mySwiper"
            slidesPerView={3}
            spaceBetween={40}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            dir="rtl"
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              425: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 4,
                // spaceBetween: 50,
              },
            }}
            modules={[Navigation]}
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <SwiperSlide key={index} className="slider">
                <div className="slider-item">
                  <div className="slider-item-info">
                    <div className="date">
                      <p>12.12.2024</p>
                      <img src="/images/Calendar.png" alt="calendar-icon" />
                    </div>
                    <p className="title">مقرر رياضة 1</p>
                    <p className="slider-item-text">
                      ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم
                      ليظهر للعميل الشكل كاملاً.
                    </p>
                    <button className="slider-item-btn">رياضة 2 📚</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="chapter">
          <div className="swiper-nav-buttons">
            <button
              className="next-btn"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img src="/images/Frame 40.png" alt="next-btn" />
            </button>
            <button
              className="prev-btn"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img src="/images/Frame 74.png" alt="prev-btn" />
            </button>
          </div>
          <Swiper
            className="mySwiper"
            slidesPerView={3}
            spaceBetween={40}
            onBeforeInit={(swiper) => {
              swiperRef_1.current = swiper;
            }}
            dir="rtl"
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              425: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 4,
                // spaceBetween: 50,
              },
            }}
            modules={[Navigation]}
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <SwiperSlide key={index} className="slider">
                <div className="slider-item">
                  <div className="slider-item-info">
                    <div className="date">
                      <p>12.12.2024</p>
                      <img src="/images/Calendar.png" alt="calendar-icon" />
                    </div>
                    <p className="title">مقرر رياضة 1</p>
                    <p className="slider-item-text">
                      ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم
                      ليظهر للعميل الشكل كاملاً.
                    </p>
                    <button className="slider-item-btn">رياضة 2 📚</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default StudyPlan;
