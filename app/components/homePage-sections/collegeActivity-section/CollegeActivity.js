"use cleint";
import { useAppContext } from "../../../context/index";
import React, { useRef } from "react";
import CustomSwiper from "./Swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { homePageData } from "../../../data";

const CollegeActivity = () => {
  // const { collegeActivitiesData } = useAppContext();
  const collegeActivitiesData =
    homePageData && homePageData.data.collegeActivities;

  const swiperRef = useRef();

  const slides = [
    { src: "/images/CollegeGradFacts__feature-jpg.webp", alt: "Slide 1" },
    { src: "/images/journal-posts-content-img.jpg", alt: "Slide 2" },
    { src: "/images/CollegeGradFacts__feature-jpg.webp", alt: "Slide 3" },
    { src: "/images/CollegeGradFacts__feature-jpg.webp", alt: "Slide 4" },
  ];

  // const activities = [
  //   {
  //     pictures: [
  //       "/images/college-activity-img.png",
  //       "/images/about-college-first.jpg",
  //     ],
  //     title: "تهنئة د. مصطفى احمد على حصوله على الدكتوراة",
  //     activitieDate: "676865766567657567",
  //     about:
  //       "ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.",
  //   },
  //   {
  //     pictures: [
  //       "/images/college-activity-img.png",
  //       "/images/about-college-first.jpg",
  //     ],
  //     title: "تهنئة د. مصطفى احمد على حصوله على الدكتوراة",
  //     activitieDate: "676865766567657567",
  //     about:
  //       "ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.",
  //   },
  //   {
  //     pictures: [
  //       "/images/college-activity-img.png",
  //       "/images/about-college-first.jpg",
  //     ],
  //     title: "تهنئة د. مصطفى احمد على حصوله على الدكتوراة",
  //     activitieDate: "676865766567657567",
  //     about:
  //       "ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.",
  //   },
  //   {
  //     pictures: [
  //       "/images/college-activity-img.png",
  //       "/images/about-college-first.jpg",
  //     ],
  //     title: "تهنئة د. مصطفى احمد على حصوله على الدكتوراة",
  //     activitieDate: "676865766567657567",
  //     about:
  //       "ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.",
  //   },
  //   {
  //     pictures: [
  //       "/images/college-activity-img.png",
  //       "/images/about-college-first.jpg",
  //     ],
  //     title: "تهنئة د. مصطفى احمد على حصوله على الدكتوراة",
  //     activitieDate: "676865766567657567",
  //     about:
  //       "ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.",
  //   },
  //   {
  //     pictures: [
  //       "/images/college-activity-img.png",
  //       "/images/about-college-first.jpg",
  //     ],
  //     title: "تهنئة د. مصطفى احمد على حصوله على الدكتوراة",
  //     activitieDate: "676865766567657567",
  //     about:
  //       "ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.",
  //   },
  // ];

  return (
    <div className="college-activity-section">
      <div className="college-activity-head">
        <div className="college-activity-head-content">
          <p className="college-activity-title">
            <span>نشاطات</span> الكلية
          </p>
        </div>
        <hr />
        <div className="college-activity-head-text">
          <p>{collegeActivitiesData.aboutActivities}</p>
        </div>
      </div>

      <div className="college-activity-content">
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
              spaceBetween: 40,
            },
            1025: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
        >
          {collegeActivitiesData.listActivities.map((activity, index) => (
            <SwiperSlide key={index} className="slider">
              <div className="slider-item">
                <div className="overflow-hidden relative">
                  <CustomSwiper
                    slides={activity.pictures}
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
                      <p>{activity.activitieDate.slice(0, 10)}</p>
                      <img src="/images/Calendar.png" alt="calendar-icon" />
                    </div>
                    <p className="title">{activity.title}</p>
                    <p className="slider-item-text">{activity.about}</p>
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

export default CollegeActivity;
