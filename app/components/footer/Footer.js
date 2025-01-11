"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_head}>
        <div className={styles.follow_us}>
          <h3>تابعونا على:</h3>
          <div className={styles.social_media}>
            <Link href="https://www.facebook.com/">
              <FacebookIcon width={24} height={24} />
            </Link>
            <Link href="https://www.linkedin.com/">
              <LinkedInIcon width={24} height={24} />
            </Link>
            <Link href="https://www.google.com/">
              <GoogleIcon width={24} height={24} />
            </Link>

            <Link href="https://www.instagram.com/">
              <XIcon width={24} height={24} />
            </Link>

            <Link href="https://www.instagram.com/">
              <InstagramIcon width={24} height={24} />
            </Link>
          </div>
        </div>

        <div className={styles.footer_logo}>
          <Image
            src="/images/footer-logo.png"
            alt="logo"
            width={235}
            height={120}
          />
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.footer_content}>
        <div className={styles.address}>
          <h2>العنوان</h2>
          <p>R2PH+C46، الطريق الساحلي، جنزور</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.3268915824265!2d13.024362176166676!3d32.83659548093797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a8e8d0e3f04c05%3A0x22f7d90b454ab9f9!2z2YPZhNmK2Kkg2KfZhNiq2YLZhtmK2Kkg2KfZhNmH2YbYr9iz2YrYqSDYrNmG2LLZiNix!5e0!3m2!1sen!2sly!4v1734975151732!5m2!1sen!2sly"
            width="100%"
            height="221"
            loading="lazy"
            className={styles.iframe}
          ></iframe>
        </div>
        <div className={styles.footer_links}>
          <div className={styles.ul_container}>
            <h2>عن الكلية</h2>
            <ul>
              <li>
                <Link href="/about">نبذة عن الكلية</Link>
                <ArrowBackIcon width={8.71} height={6.33} />
              </li>
              <li>
                <Link href="/contact">لوائح الكلية </Link>
                <ArrowBackIcon width={8.71} height={6.33} />
              </li>
              <li>
                <Link href="/news">الدراسات العليا</Link>
                <ArrowBackIcon width={8.71} height={6.33} />
              </li>
            </ul>
          </div>
          <div className={`${styles.ul_container} ${styles.section}`}>
            <h2>الأقسام العلمية</h2>
            <ul>
              <li>
                <Link href="/">القسم العام </Link>
                <ArrowBackIcon width={8.71} height={6.33} />
              </li>
              <li>
                <Link href="/contact">قسم نظم تقنيات الحاسوب </Link>
                <ArrowBackIcon width={8.71} height={6.33} />
              </li>
              <li>
                <Link href="/news"> قسم الهندسة الكهربائية و الإلكترونية</Link>
                <ArrowBackIcon width={8.71} height={6.33} />
              </li>
              <li>
                <Link href="/news"> قسم الهندسة النفطية</Link>
                <ArrowBackIcon width={8.71} height={6.33} />
              </li>
              <li>
                <Link href="/news"> قسم الهندسة الكيميائية و البيئية</Link>
                <ArrowBackIcon width={8.71} height={6.33} />
              </li>
              <li>
                <Link href="/news">قسم الهندسة الميكانيكية</Link>
                <ArrowBackIcon width={8.71} height={6.33} />
              </li>
            </ul>
          </div>

          <div className={styles.ul_container}>
            <h2>المسجل العام</h2>
            <ul>
              <li>
                <Link href="/">الخريجين</Link>
                <ArrowBackIcon width={8.71} height={6.33} />
              </li>
              <li>
                <Link href="/contact">الدراسة والامتحانات </Link>
                <ArrowBackIcon width={8.71} height={6.33} />
              </li>
              <li>
                <Link href="/news"> الشؤون الطلابية</Link>
                <ArrowBackIcon width={8.71} height={6.33} />
              </li>
            </ul>
          </div>
          <div className={styles.ul_container}>
            <h2> الخدمات والدعم</h2>
            <ul>
              <li>
                <Link href="/"> خدمات الطالب </Link>
                <ArrowBackIcon width={8.71} height={6.33} />
              </li>
              <li>
                <img src="/images/Export.svg" alt="open-in-new-icon" />
                <Link href="/contact"> منصة التعليم الالكتروني </Link>
                <ArrowBackIcon width={8.71} height={6.33} />
              </li>
            </ul>
          </div>
          <div className={styles.ul_container}>
            <h2> المجلة العلمية</h2>
            <ul>
              <li>
                <Link href="/">نبذة عن المجلة</Link>
                <ArrowBackIcon width={8.71} height={6.33} />
              </li>
              <li>
                <Link href="/contact">أعضاء المجلة</Link>
                <ArrowBackIcon width={8.71} height={6.33} />
              </li>
              <li>
                <Link href="/news">إصدارات المجلة</Link>
                <ArrowBackIcon width={8.71} height={6.33} />
              </li>
            </ul>
          </div>
          {screenWidth < 760 ? (
            <div className={styles.ul_container}>
              <h2>الأقسام العلمية</h2>
              <ul>
                <li>
                  <Link href="/">القسم العام </Link>
                  <ArrowBackIcon width={8.71} height={6.33} />
                </li>
                <li>
                  <Link href="/contact">قسم نظم تقنيات الحاسوب </Link>
                  <ArrowBackIcon width={8.71} height={6.33} />
                </li>
                <li>
                  <Link href="/news">
                    {" "}
                    قسم الهندسة الكهربائية و الإلكترونية
                  </Link>
                  <ArrowBackIcon width={8.71} height={6.33} />
                </li>
                <li>
                  <Link href="/news"> قسم الهندسة النفطية</Link>
                  <ArrowBackIcon width={8.71} height={6.33} />
                </li>
                <li>
                  <Link href="/news"> قسم الهندسة الكيميائية و البيئية</Link>
                  <ArrowBackIcon width={8.71} height={6.33} />
                </li>
                <li>
                  <Link href="/news">قسم الهندسة الميكانيكية</Link>
                  <ArrowBackIcon width={8.71} height={6.33} />
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <p>جميع الحقوق محفوظة لدى كلية التقنية الهندسية جنزور</p>
        <CopyrightIcon
          style={{
            width: screenWidth < 760 && "15px",
            height: screenWidth < 760 && "15px",
          }}
        />
        <p>2024</p>
      </div>
    </footer>
  );
};

export default Footer;
