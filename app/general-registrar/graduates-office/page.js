"use client";
import React from "react";
import styles from "./GraduatesOffice.module.scss";
import { useAppContext } from "@/app/context";
import { graduatesData } from "../../data";

const GraduatesOfficePage = () => {
  // const { graduatesOfficeData } = useAppContext();
  const graduatesOfficeData = graduatesData && graduatesData.data;

  const missions = graduatesOfficeData.missions || [];

  // if (graduatesOfficeData.isLoading) {
  //   return <div className="loader"></div>;
  // }

  return (
    <div className={styles.graduates_office_main}>
      <div className={styles.graduates_office_head}>
        <div className={styles.graduates_office_title}>
          <p>
            نبذة عن مكتب <span>الخريجين </span>
          </p>
        </div>
        <hr />
        <div className={styles.graduates_office_text}>
          <p>{graduatesOfficeData.aboutGraduatesOffice || ""}</p>
        </div>
      </div>
      <div className={styles.missions}>
        <div className={styles.missions_main}>
          <div className={styles.missions_container}>
            <div className={styles.missions_head}>
              <p className={styles.mission_head_title}> مهام مكتب الخريجين: </p>
              <p className={styles.graduates_office_text}>
                {graduatesOfficeData.missions.aboutMissions || "test text"}
              </p>
            </div>
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

          <div className={styles.graduates_img_section}>
            <img
              src="/images/graduates-office.png"
              alt="graduates-office-img"
            />
          </div>
        </div>
      </div>

      <div className={styles.graduates_office_notes}>
        <div>
          <img src="/images/Frame 134 (1).png" alt="icon" />
        </div>
        <p>{graduatesOfficeData.notes || ""}</p>
      </div>
    </div>
  );
};

export default GraduatesOfficePage;
