"use client";
import { useAppContext } from "../context";
import React, { useState, useEffect } from "react";
import styles from "./ScientificJournal.module.scss";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { scientificJour } from "../data";

const ScientificJournal = () => {
  // const { isLoading3, scientificJournalData } = useAppContext();
  const scientificJournalData = scientificJour && scientificJour.data;

  const [visibleMemberCount, setVisibleMemberCount] = useState(5);
  const [visibleReleaseCount, setVisibleReleaseCount] = useState(3);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  console.log("scientificJournalData", scientificJournalData);

  const scientificJournalMembers =
    (scientificJournalData && scientificJournalData.journalMembers) || [];
  const journalStatistics =
    (scientificJournalData && scientificJournalData.journalStatistics) || [];
  const journalReleases =
    (scientificJournalData && scientificJournalData.journalReleases) || [];

  const [studyYear, setStudyYear] = useState("");
  const [journalLanguage, setJournalLanguage] = useState("");

  const handleStudyYear = (e) => {
    setStudyYear(e.target.value);
  };

  const handleJournalLanguage = (e) => {
    setJournalLanguage(e.target.value);
  };

  const handleShowMore = (setState, arr) => {
    setState(arr.length);
  };

  const handleShowLess = (setState, count) => {
    setState(count);
  };

  if (!scientificJournalData) {
    return <div className="loader"></div>;
  }

  // const members = [
  //   {
  //     jop: "محرر المجلة",

  //     journalMemberId: "f384f0e1-3a95-41c7-8587-0b3459ef05ae",
  //     memberPicture: "/images/top-five-1.jpg",
  //     name: "د. نوال عبدالله",
  //   },
  //   {
  //     jop: "محرر المجلة",

  //     journalMemberId: "f384f0e1-3a95-41c7-8587-0b3459ef05ae",
  //     memberPicture: "/images/top-five-1.jpg",
  //     name: "د. نوال عبدالله",
  //   },
  //   {
  //     jop: "محرر المجلة",

  //     journalMemberId: "f384f0e1-3a95-41c7-8587-0b3459ef05ae",
  //     memberPicture: "/images/top-five-1.jpg",
  //     name: "د. نوال عبدالله",
  //   },
  //   {
  //     jop: "محرر المجلة",

  //     journalMemberId: "f384f0e1-3a95-41c7-8587-0b3459ef05ae",
  //     memberPicture: "/images/top-five-1.jpg",
  //     name: "د. نوال عبدالله",
  //   },
  //   {
  //     jop: "محرر المجلة",

  //     journalMemberId: "f384f0e1-3a95-41c7-8587-0b3459ef05ae",
  //     memberPicture: "/images/top-five-1.jpg",
  //     name: "د. نوال عبدالله",
  //   },
  //   {
  //     jop: "محرر المجلة",

  //     journalMemberId: "f384f0e1-3a95-41c7-8587-0b3459ef05ae",
  //     memberPicture: "/images/top-five-1.jpg",
  //     name: "د. نوال عبدالله",
  //   },
  //   {
  //     jop: "محرر المجلة",

  //     journalMemberId: "f384f0e1-3a95-41c7-8587-0b3459ef05ae",
  //     memberPicture: "/images/top-five-1.jpg",
  //     name: "د. نوال عبدالله",
  //   },
  //   {
  //     jop: "محرر المجلة",

  //     journalMemberId: "f384f0e1-3a95-41c7-8587-0b3459ef05ae",
  //     memberPicture: "/images/top-five-1.jpg",
  //     name: "د. نوال عبدالله",
  //   },
  //   {
  //     jop: "محرر المجلة",

  //     journalMemberId: "f384f0e1-3a95-41c7-8587-0b3459ef05ae",
  //     memberPicture: "/images/top-five-1.jpg",
  //     name: "د. نوال عبدالله",
  //   },
  // ];

  // const lastReleases = [
  //   {
  //     date: "2025-01-01T00:00:00",
  //     issueNumber: "44",
  //     journalReleaseId: "b223eb50-a83a-4584-c9b5-08dd298dac1d",
  //     picture: "/images/Pexels Photo by Pixabay (1).png",
  //     volumeArticles: null,
  //     volumeId: "8d8b1e30-1586-46f8-44dc-08dd298d976b",
  //     volumeNumber: "44",
  //     volumeTitle: "عنوان المجلد يوضع هنا-",
  //   },
  //   {
  //     date: "2025-01-01T00:00:00",
  //     issueNumber: "44",
  //     journalReleaseId: "b223eb50-a83a-4584-c9b5-08dd298dac1d",
  //     picture: "/images/Pexels Photo by Pixabay (2).png",
  //     volumeArticles: null,
  //     volumeId: "8d8b1e30-1586-46f8-44dc-08dd298d976b",
  //     volumeNumber: "44",
  //     volumeTitle: "عنوان المجلد يوضع هنا-",
  //   },
  //   {
  //     date: "2025-01-01T00:00:00",
  //     issueNumber: "44",
  //     journalReleaseId: "b223eb50-a83a-4584-c9b5-08dd298dac1d",
  //     picture: "/images/Pexels Photo by Pixabay (1).png",
  //     volumeArticles: null,
  //     volumeId: "8d8b1e30-1586-46f8-44dc-08dd298d976b",
  //     volumeNumber: "44",
  //     volumeTitle: "عنوان المجلد يوضع هنا-",
  //   },
  //   {
  //     date: "2025-01-01T00:00:00",
  //     issueNumber: "44",
  //     journalReleaseId: "b223eb50-a83a-4584-c9b5-08dd298dac1d",
  //     picture: "/images/Pexels Photo by Pixabay.png",
  //     volumeArticles: null,
  //     volumeId: "8d8b1e30-1586-46f8-44dc-08dd298d976b",
  //     volumeNumber: "44",
  //     volumeTitle: "عنوان المجلد يوضع هنا-",
  //   },
  // ];

  return (
    <div className={styles.scientific_journal_main}>
      <div className={styles.scientific_journal_head}>
        <p>
          نبذة عن
          <span> المجلة العلمية</span>
        </p>
      </div>
      <hr />
      <div className={styles.scientific_journal_text}>
        <p>{scientificJournalData.aboutScientificJournal || ""}</p>
      </div>
      <div className={styles.journal_statistics_head}>
        <p>إحصائيات المجلة</p>
      </div>
      <div className={styles.scientific_journal_statistics}>
        <div className={styles.single_statistic}>
          <img
            src="/images/statistic-img-1 (1).png"
            alt="sigle-statistic-image"
          />

          <div className={styles.statistic_info}>
            <p className={styles.statistic_number}>
              {scientificJournalData.journalReleasesCount}
            </p>
            <p className={styles.statistic_text}>عدد الإصدارات </p>
          </div>
        </div>
        <div className={styles.single_statistic}>
          <img
            src="/images/statistic-img-1 (1).png"
            alt="sigle-statistic-image"
          />

          <div className={styles.statistic_info}>
            <p className={styles.statistic_number}>
              {scientificJournalData.volumeArticleCount}
            </p>
            <p className={styles.statistic_text}>عدد المؤلفين </p>
          </div>
        </div>
        <div className={styles.single_statistic}>
          <img
            src="/images/statistic-img-1 (1).png"
            alt="sigle-statistic-image"
          />

          <div className={styles.statistic_info}>
            <p className={styles.statistic_number}>
              {scientificJournalData.journalMembersCount}
            </p>
            <p className={styles.statistic_text}>عدد المؤلفين </p>
          </div>
        </div>
      </div>

      <div className={styles.scientific_journal_members}>
        <div className={styles.journal_members_head}>
          <p>
            <span> أعضاء </span>
            المجلة{" "}
          </p>
        </div>
        <hr />
        <div className={styles.journal_members_text}>
          {scientificJournalData.aboutJournalMembers || ""}
        </div>

        <div className={styles.members_container}>
          {screenWidth > 450 ? (
            scientificJournalMembers
              .slice(0, visibleMemberCount)
              .map((member, index) => {
                return (
                  <div key={index} className={styles.single_member}>
                    <div className={styles.member_img_box}>
                      <img
                        src={member.memberPicture || "/images/top-five-1.jpg"}
                        alt="top-five-student-image"
                      />
                    </div>
                    <div className={styles.member_info}>
                      <p className={styles.member_name}>{member.name} </p>
                      <p className={styles.member_text}>{member.jop}</p>
                    </div>
                  </div>
                );
              })
          ) : (
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              dir="rtl"
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
              breakpoints={{
                425: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1440: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
            >
              {scientificJournalMembers
                .slice(0, visibleMemberCount)
                .map((member, index) => {
                  return (
                    <SwiperSlide key={index} className={styles.single_member}>
                      <div key={index} className={styles.single_member}>
                        <div className={styles.member_img_box}>
                          <img
                            src={
                              member.memberPicture || "/images/top-five-1.jpg"
                            }
                            alt="top-five-student-image"
                          />
                        </div>
                        <div className={styles.member_info}>
                          <p className={styles.member_name}>{member.name} </p>
                          <p className={styles.member_text}>{member.jop}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          )}
        </div>
        {scientificJournalMembers.length > 5 ? (
          visibleMemberCount < scientificJournalMembers.length ? (
            <button
              className={styles.show_more_btn}
              onClick={() => {
                handleShowMore(setVisibleMemberCount, scientificJournalMembers);
              }}
            >
              <img src="/images/Arrow - Bottom_show-more-btn.png" alt="" />
              عرض باقي الأعضاء
            </button>
          ) : (
            <button
              className={styles.show_more_btn}
              onClick={() => {
                handleShowLess(setVisibleMemberCount, 5);
              }}
            >
              عرض أقل
            </button>
          )
        ) : null}
      </div>

      <div className={styles.journal_releases_section}>
        <div className={styles.journal_releases_head}>
          <div className={styles.buttons_title}>
            <div className={styles.title}>
              {" "}
              <p>
                آخر
                <span> الإصدارات</span>
              </p>
            </div>
            <div className={styles.head_buttons}>
              <div className={styles.select_btn}>
                <label htmlFor="">العام الدراسي:</label>
                <select
                  className={`${styles.select} w-[140px]`}
                  defaultValue={studyYear}
                  name=""
                  required
                  onChange={(e) => {
                    handleStudyYear(e);
                  }}
                >
                  <option id="option" value="الكل">
                    الكل
                  </option>
                  <option className={styles.option}>2024 - 2025</option>
                  <option>2023 - 2024</option>
                  <option>2022 - 2023</option>
                  <option>2021 - 2022</option>
                  <option>2020 - 2021</option>
                </select>
              </div>
              <div className={styles.select_btn}>
                <label htmlFor="">العام الدراسي:</label>
                <select
                  className={`${styles.select} w-[110px]`}
                  defaultValue={journalLanguage}
                  name=""
                  required
                  onChange={(e) => {
                    handleJournalLanguage(e);
                  }}
                >
                  <option>الكل</option>
                  <option>العربية</option>
                  <option>الإنجليزية</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.about_journal_release_text}>
            <p>{scientificJournalData.aboutLatestReleases || ""}</p>
          </div>
        </div>

        <div className={styles.journal_releases_content}>
          {journalReleases
            .slice(0, visibleReleaseCount)
            .map((release, index) => {
              return (
                <Link
                  key={index}
                  href={`/scientific-journal/${release.journalReleaseId}` || ""}
                >
                  <div className={`${styles.single_release}`}>
                    <div className={`${styles.release_img_box}`}>
                      <img
                        src={`${
                          release.picture ||
                          "/images/Pexels Photo by Pixabay (1).png"
                        }`}
                        alt="release-image"
                      />
                    </div>
                    <div className={`${styles.release_info}`}>
                      <div className={`${styles.release_info_head}`}>
                        <div className={`${styles.release_number}`}>
                          العدد {release.volumeNumber}
                        </div>
                        <div className={`${styles.release_date}`}>
                          {release.date.slice(0, 10)}
                        </div>
                      </div>
                      <div className={`${styles.release_title}`}>
                        {release.volumeTitle}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>

        {journalReleases.length > 3 ? (
          visibleReleaseCount < journalReleases.length ? (
            <button
              className={styles.show_more_btn}
              onClick={() => {
                handleShowMore(setVisibleReleaseCount, journalReleases);
              }}
            >
              <img src="/images/Arrow - Bottom_show-more-btn.png" alt="" />
              عرض باقي المجلدات
            </button>
          ) : (
            <button
              className={styles.show_more_btn}
              onClick={() => {
                handleShowLess(setVisibleReleaseCount, 3);
              }}
            >
              عرض أقل
            </button>
          )
        ) : null}
      </div>
    </div>
  );
};

export default ScientificJournal;
