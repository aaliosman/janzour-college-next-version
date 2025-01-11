"use client";
import React from "react";
import styles from "./Registration.module.scss";
import { useAppContext } from "@/app/context";
import { registerAddm } from "../data";

const RegistrationAndAdmission = () => {
  // const { registrationAndAdmissionData } = useAppContext();
  const registrationAndAdmissionData = registerAddm && registerAddm.data;
  console.log("registrationAndAdmissionData", registrationAndAdmissionData);
  const conditions =
    (registrationAndAdmissionData && registerAddm.data.conditions) || [];

  const testConditionsArr = [
    {
      title: "المؤهل الدراسي",
      about: "يجب على الطالب أن يكون حاصلاً على شهادة الثانوية العامة (علمي).",
      img: "/images/condition-icon.png",
    },
    {
      title: "المؤهل الدراسي",
      about: "يجب على الطالب أن يكون حاصلاً على شهادة الثانوية العامة (علمي).",
      img: "/images/condition-icon.png",
    },
    {
      title: "المؤهل الدراسي",
      about: "يجب على الطالب أن يكون حاصلاً على شهادة الثانوية العامة (علمي).",
      img: "/images/condition-icon.png",
    },
    {
      title: "المؤهل الدراسي",
      about: "يجب على الطالب أن يكون حاصلاً على شهادة الثانوية العامة (علمي).",
      img: "/images/condition-icon.png",
    },
  ];

  if (!registrationAndAdmissionData) {
    return <div className="loader"></div>;
  }
  // ask about button target and notes string or an array
  // edit about text for single condition as list li
  return (
    <div className={styles.registration_page_main}>
      <div className={styles.registration_page_head}>
        <div className={styles.registration_page_title}>
          <button className={styles.registration_btn}>
            الإنتقال لبوابة التسجيل
            <img src="/images/Export.svg" alt="open-in-new-icon" />
          </button>
          <p>
            <span>شروط القبول </span>
            للطلبة الجدد
          </p>
        </div>

        <hr />
      </div>
      <div className={styles.conditions}>
        <div className={styles.conditions_main}>
          <div className={styles.conditions_container}>
            {conditions.map((condition, index) => {
              return (
                <div key={index} className={styles.single_condition}>
                  <div className="pt-2">
                    <img src={condition.picture} alt="condition-icon" />
                  </div>
                  <div className={styles.single_condition_content}>
                    <p className={styles.condition_title}>
                      {" "}
                      {condition.title || ""} :
                    </p>
                    <p className={styles.condition_about}>
                      {condition.about || ""}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.conditions_img_section}>
            <img
              src="/images/registrations-section-img.png"
              alt="registrations-office-img"
            />
          </div>
        </div>
      </div>

      <div className={styles.registration_page_notes}>
        <p>{registrationAndAdmissionData.notes || ""}</p>
      </div>
    </div>
  );
};

export default RegistrationAndAdmission;
