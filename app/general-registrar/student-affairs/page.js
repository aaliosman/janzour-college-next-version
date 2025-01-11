"use client";
import React from "react";
import styles from "./StudentAffairs.module.scss";
import { useAppContext } from "@/app/context";
import { studentAffairs } from "../../data";

const StudentsAffairsPage = () => {
  // const { studentAffairsOfficeData } = useAppContext();
  const studentAffairsOfficeData = studentAffairs && studentAffairs.data;

  const missions = studentAffairsOfficeData.missions || [];

  if (studentAffairsOfficeData.isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <div className={styles.student_affairs_main}>
      <div className={styles.student_affairs_head}>
        <div className={styles.student_affairs_title}>
          <p>
            الشئون <span>الطلابية </span>
          </p>
        </div>
        <hr />
        <div className={styles.student_affairs_text}>
          <p>{studentAffairsOfficeData.aboutStudentAffairs || ""}</p>
        </div>
      </div>
      <div className={styles.missions}>
        <div className={styles.missions_main}>
          <div className={styles.missions_container}>
            {missions.map((mission, index) => {
              return (
                <div key={index} className={styles.single_mission}>
                  <div className="pt-2">
                    <img src="/images/Vector.png" alt="condition-icon" />
                  </div>
                  <div className={styles.single_mission_content}>
                    <p className={styles.mission_title}>
                      {" "}
                      {mission.title || ""} :
                    </p>
                    <p className={styles.mission_about}>
                      {mission.about || ""}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.student_ffairs_img_section}>
            <img
              src="/images/student-affairs-img.png"
              alt="graduates-office-img"
            />
          </div>
        </div>
      </div>

      <div className={styles.graduates_office_notes}>
        <div>
          <img src="/images/Frame 134 (1).png" alt="icon" />
        </div>
        <p>{studentAffairsOfficeData.studentAffairsNotes || ""}</p>
      </div>
    </div>
  );
};

export default StudentsAffairsPage;
