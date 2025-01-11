"use cleint";
import { useAppContext } from "../../../context/index";
import React, { useRef } from "react";
import Jobs from "./Jobs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { homePageData } from "../../../data";

const ScholarShipsAndJobs = () => {
  // const { scholarshipsAndJobOppor } = useAppContext();
  const scholarshipsAndJobOppor =
    homePageData && homePageData.data.scholarshipsAndJobOpportunities;

  const swiperRef = useRef();
  const slides = [
    { src: "/images/scholar-ships-jobs.jpg", alt: "Slide 1" },
    { src: "/images/journal-posts-content-img.jpg", alt: "Slide 2" },
    { src: "/images/scholar-ships-jobs.jpg", alt: "Slide 1" },
    { src: "/images/journal-posts-content-img.jpg", alt: "Slide 4" },
  ];
  return (
    <div className="scholar-ships-jobs-section">
      <div className="scholar-ships-jobs-head">
        <div className="scholar-ships-jobs-head-content">
          <p className="scholar-ships-jobs-title">
            {" "}
            محتوى عن
            <span> المنح الدراسية وفرص العمل</span>
          </p>
        </div>
        <hr />
        <div className="scholar-ships-jobs-head-text">
          <p>{scholarshipsAndJobOppor.aboutScholarshipsAndJobOpportunities}</p>
        </div>
      </div>

      <div className="scholar-ships-jobs-content">
        <Swiper
          slidesPerView={1}
          dir="rtl"
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper z-[-10]"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            425: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1025: {
              slidesPerView: 1,
            },
            1280: {
              slidesPerView: 1,
            },
          }}
        >
          {scholarshipsAndJobOppor.scholarships.map((slide, i) => {
            return (
              <SwiperSlide key={i} className="single-slider">
                <div className="scholar-ships-jobs-content-info">
                  <div className="scholar-ships-jobs-content-info-head">
                    <p className="smal-title">المنح الدراسية</p>
                    <p className="title">{slide.title}</p>
                  </div>
                  <p className="scholar-ships-jobs-content-text">
                    {slide.about}
                  </p>
                </div>

                <div className="scholar-ships-jobs-content-img">
                  <img
                    src={slide.picture || "/images/scholar-ships.jpg"}
                    alt="scholar-ships-jobs-image"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
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

      <Jobs />
    </div>
  );
};

export default ScholarShipsAndJobs;
