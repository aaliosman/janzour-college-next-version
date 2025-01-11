"use client";
import { useAppContext } from "@/app/context";
import styles from "./StudentServices.module.scss";
import { studentService } from "../../data";
const StudentServices = () => {
  // const { eServicesData } = useAppContext();
  const eServicesData = studentService && studentService.data;

  const studentServices = eServicesData.services || [];

  if (eServicesData.isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <div className={styles.student_services_main}>
      <div className={styles.student_service_section}>
        <div className={styles.student_service_head}>
          <p>
            <span>خدمات </span> الطالب
          </p>
        </div>
        <hr />
        <div className={styles.student_service_text}>
          <p>{eServicesData.aboutStudentServices || ""}</p>
        </div>

        <div className={styles.services_section}>
          <div className={styles.services_head}>
            <div className={styles.services_head_content}>
              <p className={styles.services_title}>أبرز الخدمات المقدمة </p>
            </div>
            <hr />
            <div className={styles.services_head_text}>
              <p>{eServicesData.aboutMostProminentServices || ""}</p>
            </div>
          </div>

          <div className={styles.services_chapterts_container}>
            {studentServices.map((service, index) => {
              return (
                <div key={index} className={styles.single_service_container}>
                  <div className={styles.slider_item}>
                    <div className={styles.slider_item_info}>
                      <p className={styles.title}> بوابة الطالب</p>
                      <p className={styles.slider_item_text}>
                        ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم
                        ليظهر للعميل الشكل كاملاً.
                      </p>
                      <button className={styles.slider_item_btn}>
                        <img src="/images/Export.png" alt="" />
                        الإنتقال لبوابة الطالب
                      </button>
                    </div>
                  </div>

                  {/* <div className={styles.slider_item}>
                    <div className={styles.slider_item_info}>
                      <div className={styles.img}>
                        <img
                          src="/images/student-services-icon.png"
                          alt="calendar-icon"
                        />
                      </div>
                      <p className={styles.title}>
                        {" "}
                        <span className="ml-2">{index + 1}.</span>{" "}
                        {service.title}
                      </p>
                      <p className={styles.slider_item_text}>{service.about}</p>
                    </div>
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentServices;
