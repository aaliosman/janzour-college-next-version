import React, { useRef } from "react";
import CustomSwiper from "./Swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LatestNews = () => {
  const swiperRef = useRef();

  const slides = [
    { src: "/images/CollegeGradFacts__feature-jpg.webp", alt: "Slide 1" },
    { src: "/images/journal-posts-content-img.jpg", alt: "Slide 2" },
    { src: "/images/CollegeGradFacts__feature-jpg.webp", alt: "Slide 3" },
    { src: "/images/CollegeGradFacts__feature-jpg.webp", alt: "Slide 4" },
  ];

  return (
    <div className="latest-news-section">
      <div className="latest-news-head">
        <div className="latest-news-head-content">
          <p className="latest-news-title">
            <span>آخر أخبار </span> القسم
          </p>
        </div>
        <hr />
      </div>

      <div className="latest-news-content">
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
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <SwiperSlide key={index} className="slider">
              <div className="slider-item">
                <div className="overflow-hidden relative">
                  <CustomSwiper
                    slides={slides}
                    navigation={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                  />
                </div>
                <div className="slider-item-info-container">
                  <div className="slider-item-info">
                    <div className="date">
                      <p>12.12.2024</p>
                      <img src="/images/Calendar.png" alt="calendar-icon" />
                    </div>
                    <p className="title">
                      تهنئة د. مصطفى احمد على حصوله على الدكتوراة
                    </p>
                    <p className="slider-item-text">
                      ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم
                      ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على
                      المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى
                      يتحدث عنه التصميم فيظهر بشكل لا يليق. هذا النص يمكن أن يتم
                      تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير
                      منظم، غير منسق، أو حتى غير مفهوم.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-nav-buttons">
          <button
            className="prev-btn"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <img src="/images/arrow-left.png" alt="next-btn" />
            التالي
          </button>
          <button
            className="next-btn"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <img src="/images/arrow-rigth.png" alt="prev-btn" />
            السابق
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
