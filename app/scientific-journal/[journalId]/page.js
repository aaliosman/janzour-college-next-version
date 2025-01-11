"use client";
import { useAppContext } from "../../context/index";
import React from "react";
import styles from "./SingleJournalPage.module.scss";
import Link from "next/link";

const Page = ({ params }) => {
  const { journalId } = React.use(params);

  const { isLoading3, scientificJournalData } = useAppContext();

  if (isLoading3) {
    return <div className="loader"></div>;
  }
  const journalFolder = scientificJournalData.journalReleases.find(
    (article) => {
      return article.journalReleaseId === journalId;
    }
  );

  return (
    <div className={`${styles.single_journal_page}`}>
      <div className={`${styles.main_content}`}>
        <div className={`${styles.content}`}>
          <div className={styles.content_head}>
            <img src="/images/Frame 134.png" alt="" />
            <p>اضغط على عنوان المقال لتحميله.</p>
          </div>

          <div className={styles.title}>
            <p className={styles.folder_title}>
              {journalFolder.volumeTitle || ""}
            </p>
            <p className={styles.folder_number}>
              {journalFolder.volumeNumber || ""} العدد
            </p>
            <p className={styles.date}>
              {journalFolder.date.slice(0, 10) || ""}
            </p>
          </div>
          <div className={`${styles.img_box} sm:block md:hidden`}>
            <img
              src="/images/Pexels Photo by Pixabay.png"
              alt="journal-folder-img"
            />
          </div>
          <div className={styles.downloads}>
            {journalFolder.volumeArticles.map((article, index) => {
              return (
                <Link
                  key={index}
                  href={article.pathFile || "/"}
                  target="_blank"
                >
                  <div className={styles.single_download_box}>
                    <div className={styles.author_name}>
                      {article.authorName}
                    </div>
                    <div className={styles.download_title}>
                      <p>{article.articleTitle}</p>
                      <img
                        src="/images/🦆 icon _cloud download_.png"
                        alt="download-icon"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className={`${styles.img_box} hidden md:block`}>
          <img
            src="/images/Pexels Photo by Pixabay.png"
            alt="journal-folder-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
