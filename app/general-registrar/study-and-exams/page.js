"use client";
import React from "react";
import styles from "./StudyAndExams.module.scss";
import { useAppContext } from "@/app/context";
import { studyAndExams } from "../../data";

const StudyAndExamsPage = () => {
  // const { studyAndExamsOfficeData } = useAppContext();
  const studyAndExamsOfficeData = studyAndExams && studyAndExams.data;

  const missions = studyAndExamsOfficeData.missions || [];

  if (studyAndExamsOfficeData.isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <div className={styles.study_exams_main}>
      <div className={styles.study_exams_head}>
        <div className={styles.study_exams_title}>
          <p>
            نبذة عن مكتب <span>الدراسة و الإمتحانات </span>
          </p>
        </div>
        <hr />
        <div className={styles.study_exams_text}>
          <p>{studyAndExamsOfficeData.aboutStudyAndExaminationOffice || ""}</p>
        </div>
      </div>
      <div className={styles.missions}>
        <p className={styles.mission_title}>المهام الرئيسية: </p>
        <div className={styles.missions_container}>
          {missions.map((mission, index) => {
            return (
              <div key={index} className={styles.single_mission}>
                <div>
                  <img src="/images/Vector.png" alt="condition-icon" />
                </div>
                <div className={styles.single_mission_content}>
                  <p className={styles.mission_title}>
                    {" "}
                    {mission.title || ""} :
                  </p>
                  <p className={styles.mission_about}>{mission.about || ""}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudyAndExamsPage;
