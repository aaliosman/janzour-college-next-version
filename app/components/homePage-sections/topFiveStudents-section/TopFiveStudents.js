"use cleint";
import { useAppContext } from "../../../context/index";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { homePageData } from "../../../data";

const TopFiveStudents = () => {
  // const { topFiveData } = useAppContext();
  const topFiveData = homePageData && homePageData.data.topFive;

  return (
    <div className="top-five-section">
      <div className="top-five-head">
        <p>
          <span>الخمس الأوائل </span>
          {topFiveData.titleTopFive}
        </p>
      </div>
      <hr />
      <div className="top-five-text">
        <p>{topFiveData.aboutTopFive}</p>
      </div>

      <div className="top-five-container">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          dir="rtl"
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper z-[-10]"
          breakpoints={{
            425: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {topFiveData.listTopFive.map((student, i) => {
            return (
              <SwiperSlide key={i} className="sigle-student">
                <div className="sigle-student">
                  <div className="student-img-box">
                    <img
                      src={student.picture || "/images/top-five-1.jpg"}
                      alt="top-five-student-image"
                    />
                  </div>
                  <div className="student-info">
                    <p className="student-name">
                      {student.fullName}{" "}
                      <span className="student-ranking">الاول</span>
                    </p>
                    <p className="student-text">{student.studyProgramName} </p>
                    <p className="student-rating">
                      تقدير ممتاز <span>{`${student.gpaAverage} %`}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TopFiveStudents;
