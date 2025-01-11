"use client";
import { useAppContext } from "../context";
import React from "react";
import AlameedMessage from "../components/aboutPage-sections/alameedMessage/AlameedMessage";
import CollegeGoals from "../components/aboutPage-sections/college-goals-section/CollegeGoals";
import Image from "next/image";
import styles from "./About.module.scss";
import { aboutPage } from "../data";

const About = () => {
  // const { aboutPageData, isLoading2 } = useAppContext();
  const aboutPageData = aboutPage && aboutPage.data;
  // if (isLoading2) {
  //   return <div className="loader"></div>;
  // }
  return (
    <main className={styles.about_page_main}>
      <div className={styles.about_college_content}>
        <div className={styles.about_college_heading}>
          <p className={styles.about_title}>
            <span>نبذة</span> عن الكلية
          </p>
          <p className={styles.about_text}>
            {aboutPageData.aboutCollege.aboutCollege.slice(0, 200)}
          </p>
        </div>

        <div className={styles.about_text_img_1}>
          <div className={styles.about_img_box}>
            <Image
              src={aboutPageData.aboutCollege.collegePictures[0]}
              alt="about_college"
              width={776}
              height={293}
              layout="responsive"
              priority={true}
            />
          </div>

          <div className={styles.about_img_text}>
            <p>{aboutPageData.aboutCollege.aboutCollege}</p>
          </div>
        </div>

        <div className={styles.about_text_img_2}>
          <div className={styles.about_img_box}>
            <img
              src={aboutPageData.aboutCollege.collegePictures[1]}
              alt="about_college"
            />
          </div>

          <div className={styles.about_img_text}>
            <p>{aboutPageData.aboutCollege.aboutCollege}</p>
          </div>
        </div>
      </div>

      <CollegeGoals
        goals={aboutPageData.goals}
        visionOfCollege={aboutPageData.visionOfCollege}
      />
      <AlameedMessage
        deanPicture={aboutPageData.deanPicture}
        deanWord={aboutPageData.deanWord}
      />
    </main>
  );
};

export default About;
