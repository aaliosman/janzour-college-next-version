"use client";
import React from "react";
import styles from "./CollegeGraduateStudies.module.scss";
import { useAppContext } from "@/app/context";
import { graduateStudies } from "../../data";

const CollegeGraduateStudiesPage = () => {
  // const { graduateStudiesData, isLoading5 } = useAppContext();
  const graduateStudiesData = graduateStudies && graduateStudies.data;

  const conditions = graduateStudiesData.conditions || [];

  if (!graduateStudies) {
    return <div className="loader"></div>;
  }

  return (
    <div className={styles.college_graduate_studies_main}>
      <div className={styles.college_graduate_studies_head}>
        <div className={styles.college_graduate_studies_title}>
          <p>
            <span>الدراسات العليا </span> بالكلية
          </p>
        </div>
        <hr />
        <div className={styles.college_graduate_studies_text}>
          <p>{graduateStudiesData.aboutPostgraduateStudies || ""}</p>
        </div>
      </div>

      <div className={styles.conditions}>
        <p className={styles.conditions_title}>
          القبول ونظام الدراسة العليا بالقسم
        </p>
        <div className={styles.conditions_container}>
          {conditions.map((condition, index) => {
            return (
              <div key={index} className={styles.single_condition}>
                <div>
                  <img src="/images/Vector.png" alt="condition-icon" />
                </div>

                <p className={styles.condition_about}>
                  {" "}
                  {condition.about || ""}{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CollegeGraduateStudiesPage;
