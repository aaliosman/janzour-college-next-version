"use client";
import React, { useRef } from "react";
import styles from "./ScientificAffairs.module.scss";
import { useAppContext } from "../context/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { scientificAffairs } from "../data";

const ScientificAffairs = () => {
  // const { scientificAffairsOfficeData } = useAppContext();
  const scientificAffairsOfficeData =
    scientificAffairs && scientificAffairs.data;

  const swiperRef = useRef();

  // wait for data from backend
  const officeDepartments =
    (scientificAffairsOfficeData && scientificAffairsOfficeData.departments) ||
    [];

  // departments array for test
  const departments = [
    {
      img: "/images/student-services-icon.png",
      title: "القسم العلمي",
      about:
        "يُعنى بتطوير المناهج الدراسية وتحديثها لضمان توافقها مع المعايير الأكاديمية ومتطلبات السوق. كما يركز على دعم الأنشطة البحثية وتعزيز الابتكار في التعليم.",
    },
    {
      img: "/images/student-services-icon.png",
      title: "القسم العلمي",
      about:
        "يُعنى بتطوير المناهج الدراسية وتحديثها لضمان توافقها مع المعايير الأكاديمية ومتطلبات السوق. كما يركز على دعم الأنشطة البحثية وتعزيز الابتكار في التعليم.",
    },
    {
      img: "/images/student-services-icon.png",
      title: "القسم العلمي",
      about:
        "يُعنى بتطوير المناهج الدراسية وتحديثها لضمان توافقها مع المعايير الأكاديمية ومتطلبات السوق. كما يركز على دعم الأنشطة البحثية وتعزيز الابتكار في التعليم.",
    },
    {
      img: "/images/student-services-icon.png",
      title: "القسم العلمي",
      about:
        "يُعنى بتطوير المناهج الدراسية وتحديثها لضمان توافقها مع المعايير الأكاديمية ومتطلبات السوق. كما يركز على دعم الأنشطة البحثية وتعزيز الابتكار في التعليم.",
    },
    {
      img: "/images/student-services-icon.png",
      title: "القسم العلمي",
      about:
        "يُعنى بتطوير المناهج الدراسية وتحديثها لضمان توافقها مع المعايير الأكاديمية ومتطلبات السوق. كما يركز على دعم الأنشطة البحثية وتعزيز الابتكار في التعليم.",
    },
  ];

  if (!scientificAffairsOfficeData) {
    return <div className="loader"></div>;
  }

  return (
    <div className={styles.scientific_affairs_main}>
      <div className={styles.scientific_affairs_section}>
        <div className={styles.scientific_affairs_head}>
          <p>
            نبذة عن مكتب <span>الشئون العلمية </span>
          </p>
          <hr />
          <div className={styles.scientific_affairs_text}>
            <p>
              {scientificAffairsOfficeData.aboutScientificAffairs ||
                "سيتم تحميل النص"}
            </p>
          </div>
        </div>

        <div className={styles.office_importance_section}>
          <div className={styles.office_importance_head}>
            <div className={styles.office_importance_head_content}>
              <p className={styles.office_importance_title}>أهمية المكتب </p>
            </div>
            <div className={styles.office_importance_head_text}>
              <p>
                {scientificAffairsOfficeData.aboutImportanceOfOffice ||
                  "سيتم تحميل النص"}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.office_departments_section}>
          <div className={styles.office_departments_head}>
            <div className={styles.office_departments_head_content}>
              <p className={styles.office_departments_title}>أقسام المكتب </p>
            </div>
            <div className={styles.office_departments_head_text}>
              <p>
                {scientificAffairsOfficeData.aboutDepartmentsOffice ||
                  "سيتم تحميل النص"}
              </p>
            </div>
          </div>

          <div className={styles.office_departments_container}>
            <Swiper
              className="mySwiper w-full"
              slidesPerView={2}
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
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1440: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              modules={[Navigation]}
            >
              {departments.map((department, index) => (
                <SwiperSlide
                  key={index}
                  className={styles.single_department_container}
                >
                  <div className={styles.slider_item}>
                    <div className={styles.slider_item_info}>
                      <img src={department.img} alt="department-icon" />
                      <p className={styles.title}>
                        {" "}
                        <span className="ml-2">{index + 1}.</span>{" "}
                        {department.title}
                      </p>
                      <p className={styles.slider_item_text}>
                        {department.about}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.swiper_nav_buttons}>
              <button
                className={styles.next_btn}
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <img src="/images/arrow-rigth.png" alt="prev-btn" />
                السابق
              </button>
              <button
                className={styles.prev_btn}
                onClick={() => swiperRef.current?.slideNext()}
              >
                <img src="/images/arrow-left.png" alt="next-btn" />
                التالي
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScientificAffairs;
