"use client";
import React from "react";
import styles from "./CollegeRegulations.module.scss";
import { useAppContext } from "@/app/context";
import { collegeRegulations } from "../../data";

const CollegeRegulationsPage = () => {
  // const { collegeRegulationsData, isLoading4 } = useAppContext();
  const collegeRegulationsData = collegeRegulations && collegeRegulations.data;

  const regulations = collegeRegulationsData.regulations || [];

  if (!collegeRegulationsData) {
    return <div className="loader"></div>;
  }

  return (
    <div className={styles.college_regulations_main}>
      <div className={styles.college_regulation_head}>
        <div className={styles.student_service_head}>
          <p>
            <span>لوائح </span> الكلية
          </p>
        </div>
        <hr />
        <div className={styles.college_regulations_text}>
          <p>{collegeRegulationsData.aboutCollegeRegulations || ""}</p>
        </div>
      </div>

      <div className={styles.regulations}>
        {regulations.map((regulation, index) => {
          return (
            <div key={index} className={styles.single_regulation}>
              <p className={styles.regulation_title}>
                {" "}
                {regulation.title || ""}{" "}
              </p>
              <p className={styles.regulation_about}>
                {" "}
                {regulation.about || ""}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollegeRegulationsPage;
