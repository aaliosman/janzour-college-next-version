"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styles from "./BreadCrumb.module.scss";
import { useAppContext } from "../../context/index";

const Breadcrumb = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const { isLoading3, scientificJournalData } = useAppContext();

  const translations = {
    "/": "الصفحة الرئيسية",
    "/departments/general-department": "القسم العام",
    "/departments": "الأقسام",
    "/about": "عن الكلية ",
    "/departments/it-department": " قسم نظم تقنيات الحاسوب",
    "/departments/electrical-electronic-engineering-department":
      "قسم الهندسة الكهربائية والإلكترونية",
    "/departments/petroleum-engineering-department": "  قسم الهندسة النفطية",
    "/departments/chemical-environmental-engineering-department":
      "قسم الهندسة الكيميائية و البيئية",
    "/departments/mechanical-engineering-department": "قسم الهندسة الميكانيكية",
    "/e-services/student-services": "خدمات الطالب",
    "/e-services": "الخدمات الالكترونية",
    "/scientific-journal": "المجلة العلمية",
    "/important-links/college-regulations": "لوائح الكلية",
    "/important-links": "روابط قد تهمك",
    "/important-links/college-graduate-studies": "الدراسات العليا ",
    "/general-registrar": "المسجل العام",
    "/general-registrar/study-and-exams": "الدراسة والامتحانات",
    "/important-links/calendar": "التقويم الاكاديمي",
    "/general-registrar/graduates-office": "الخريجين",
    "/general-registrar/student-affairs": "الشؤون الطلابية",
    "/scientific-affairs": "الشؤون العلمية",
    "/registration-and-admission": "التسجيل والقبول",
  };

  const validRoutes = [
    "/",
    "/departments/general-department",
    "/about",
    "/departments/it-department",
    "/departments/electrical-electronic-engineering-department",
    "/departments/petroleum-engineering-department",
    "/departments/chemical-environmental-engineering",
    "/departments/mechanical-engineering-department",
    "/e-services/student-services",
    "/scientific-journal",
    "/important-links/college-regulations",
    "/important-links/college-graduate-studies",
    "/general-registrar/study-and-exams",
    "/important-links/calendar",
    "/general-registrar/graduates-office",
    "/general-registrar/student-affairs",
    "/scientific-affairs",
    "/registration-and-admission",
  ];

  const translatePath = (fullPath, segment) => {
    if (fullPath in translations) {
      return translations[fullPath];
    }
    if (fullPath.startsWith("/scientific-journal/")) {
      const journalFolder =
        !isLoading3 &&
        scientificJournalData.journalReleases.find((article) => {
          return article.journalReleaseId === segment;
        });
      return `تفاصيل المجلة (${journalFolder.volumeTitle})`;
    }
    return fullPath;
  };

  const getTranslatedPath = (index) => {
    const fullPath = `/${pathNames.slice(0, index + 1).join("/")}`;
    const segment = pathNames[index];
    return { fullPath, translated: translatePath(fullPath, segment) };
  };

  return (
    <div className={styles.breadcrumb} dir="rtl">
      <ul className={styles.bread_crumbs_ul}>
        <li className={styles.li}>{"انت هنا"}</li>
        <li
          className={
            paths === "/"
              ? `${styles.listClasses} ${styles.active}`
              : styles.listClasses
          }
        >
          <Link href={"/"}>{"الصفحة الرئيسية"}</Link>
        </li>
        {pathNames.length > 0 && (
          <span>
            <ChevronLeftIcon />
          </span>
        )}
        {pathNames.map((link, index) => {
          const { fullPath, translated } = getTranslatedPath(index);
          const isValidRoute =
            validRoutes.includes(fullPath) ||
            fullPath.startsWith("/scientific-journal/");

          let itemClasses =
            paths === fullPath
              ? `${styles.listClasses} ${styles.active}`
              : styles.listClasses;

          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                {isValidRoute ? (
                  <Link href={fullPath}>{translated}</Link>
                ) : (
                  <span>{translated}</span>
                )}
              </li>
              {pathNames.length !== index + 1 && (
                <span>
                  {" "}
                  <ChevronLeftIcon />
                </span>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
