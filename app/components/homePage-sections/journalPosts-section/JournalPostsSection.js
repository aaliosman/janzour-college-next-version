"use cleint";
import React from "react";
import { useAppContext } from "../../../context/index";
import Link from "next/link";
import { homePageData } from "../../../data";

const JournalPostsSection = () => {
  // const { isLoading1, latestReleasesData } = useAppContext();
  const latestReleasesData = homePageData && homePageData.data.latestReleases;

  // if (isLoading1) {
  //   return <div className="loader"></div>;
  // }

  return (
    <div className="journal-posts-section">
      <div className="journal-posts-head">
        <div className="journal-posts-head-content">
          <p className="journal-posts-title">
            {" "}
            اخر منشور
            <span>بالمجلة العلمية</span>
          </p>
          <Link href="/scientific-journal">
            <button className="journal-posts-btn">
              المجلة العلمية
              <img src="/images/Export.svg" alt="open-in-new-icon" />
            </button>
          </Link>
        </div>
        <hr />
        <div className="journal-posts-head-text">
          <p>{latestReleasesData.aboutLatestReleases}</p>
        </div>
      </div>

      <div className="journal-posts-content">
        <div className="journal-posts-content-info">
          <p className="title">{latestReleasesData.volumeTitle}</p>
          <p className="journal-posts-content-text">
            {" "}
            {latestReleasesData.volumeDescription || ""}
          </p>
          <button className="journal-posts-btn">
            تنزيل آخر منشور بالمجلة العلمية
            <img src="/images/Export.svg" alt="open-in-new-icon" />
          </button>
        </div>

        <div className="journal-posts-content-img">
          <img
            src={
              latestReleasesData.latestReleasesPicture.length !== 0
                ? latestReleasesData.latestReleasesPicture
                : "/images/journal-posts-content-img.jpg"
            }
            alt="journal-posts-image"
          />
        </div>
      </div>
    </div>
  );
};

export default JournalPostsSection;
