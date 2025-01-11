"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "../../../context/index";
import { homePageData } from "../../../data";
const AboutCollegeSection = () => {
  // const { aboutCollegeData, isLoading1 } = useAppContext();
  console.log("data", homePageData && homePageData.aboutCollege);
  if (!homePageData) {
    return <div className="loader"></div>;
  }
  const aboutCollegeData = homePageData && homePageData.data.aboutCollege;
  return (
    <section className="about-college-section">
      <div className="about-college-head">
        <p className="about-title">
          {" "}
          <span>نبذة</span>عن الكلية
        </p>
        <Link href="/about">
          <button className="about-college-btn">
            عن الكلية
            <img src="/images/Export.svg" alt="open-in-new-icon" />
          </button>
        </Link>
      </div>
      <hr />
      <div className="about-college-content">
        <div className="about-text">{aboutCollegeData.aboutCollege}</div>

        <div className="about-img-text">
          <Image
            src={aboutCollegeData.collegePictures[0]}
            className="about-img-text-img"
            alt="about-college-image"
            width={512}
            height={293}
            layout="responsive"
            priority={true}
          />
          <hr />
          <p>{aboutCollegeData.aboutCollege.slice(0, 300)}</p>
        </div>

        <div className="about-section-img">
          <Image
            src={aboutCollegeData.collegePictures[1]}
            alt="about-college-image"
            width={512}
            height={619}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCollegeSection;
