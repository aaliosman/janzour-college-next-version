"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const FacultyMembers = () => {
  const swiperRef = useRef();
  return (
    <div className="faculty-members-section">
      <div className="faculty-members-container">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          dir="rtl"
          navigation={false}
          modules={[Autoplay, Pagination]}
          className="mySwiper z-[-10]"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            412: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {Array.from({ length: 5 }).map((student, i) => {
            return (
              <SwiperSlide key={i} className="">
                <div className="sigle-member">
                  <div className="member-img-box">
                    <img
                      src="/images/top-five-1.jpg"
                      alt="top-five-student-image"
                    />
                  </div>
                  <div className="member-info">
                    <p className="member-name">علي عصمان</p>
                    <p className="member-text">
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                      توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                      هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                      الحروف التى يولدها التطبيق.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
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
      <div className="faculty-members-text">
        <p className="title">اعضاء هيئة التدريس</p>
        <p className="faculty-members-summary">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. <br />{" "}
          ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل
          الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص
          بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.~
        </p>
      </div>
    </div>
  );
};

export default FacultyMembers;
