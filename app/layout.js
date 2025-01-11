import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import styles from "./components/header/Header.module.scss";
import "./components/SlidingMenu/SlidingMenu.scss";
import "../style/variables.module.scss";
import "./components/homePage-sections/collegeActivity-section/CollegeActivity.scss";
import "./components/homePage-sections/topFiveStudents-section/TopFiveStudents.scss";
import "./components/homePage-sections/aboutCollege-section/AboutCollegeSection.scss";
import "./components/homePage-sections/journalPosts-section/JournalPostsSection.scss";
import "./components/homePage-sections/collegeStatistics-section/CollegeStatisticsSection.scss";
import "./components/homePage-sections/successStories-section/SuccessStorie.scss";
import "./components/homePage-sections/scholarShips-jobs-section/ScholarShipsAndJobs.scss";
import "./components/homePage-sections/workShops-section/WorkShops.scss";
import "./components/homePage-sections/faq-section/FAQ.scss";

import "./components/aboutPage-sections/alameedMessage/AlameedMessage.scss";
import "./components/aboutPage-sections/college-goals-section/CollegeGoals.scss";
import Header from "./components/header/Header";
import HeaderMobile from "./components/header/HeaderMobile";

import "./departments/general-department/GeneralDepartment.scss";
import "./components/general-department-sections/depatment-header/GeneralDepartmentHeader.scss";
import "./components/general-department-sections/department-goals/DepartmentGoals.scss";
import "./components/general-department-sections/department-faculty-members/FacultyMembers.scss";
import "./components/general-department-sections/department-news-section/LatestNews.scss";
import "./components/general-department-sections/study-plan-section/StudyPlan.scss";

import "./departments/it-department/ItDepartment.scss";
import "./components/it-department-sections/department-goals/DepartmentGoals.scss";
import "./components/it-department-sections/department-faculty-members/FacultyMembers.scss";
import "./components/it-department-sections/department-news-section/LatestNews.scss";
import "./components/it-department-sections/study-plan-section/StudyPlan.scss";
import "./components/it-department-sections/depatment-header/ItDepartmentHeader.scss";

import "./departments/electrical-electronic-engineering-department/electricalElectronicEngineeringDepartment.scss";
import "./components/electrical-electronic-engineering-department-sections/department-goals/DepartmentGoals.scss";
import "./components/electrical-electronic-engineering-department-sections/department-faculty-members/FacultyMembers.scss";
import "./components/electrical-electronic-engineering-department-sections/department-news-section/LatestNews.scss";
import "./components/electrical-electronic-engineering-department-sections/study-plan-section/StudyPlan.scss";
import "./components/electrical-electronic-engineering-department-sections/depatment-header/DepartmentHeader.scss";

import "./departments/petroleum-engineering-department/PetroleumEngineeringDepartment.scss";
import "./components/petroleum-engineering-department-sections/department-goals/DepartmentGoals.scss";
import "./components/petroleum-engineering-department-sections/department-faculty-members/FacultyMembers.scss";
import "./components/petroleum-engineering-department-sections/department-news-section/LatestNews.scss";
import "./components/petroleum-engineering-department-sections/study-plan-section/StudyPlan.scss";
import "./components/petroleum-engineering-department-sections/depatment-header/DepartmentHeader.scss";

import "./components/chemical-environmental-engineering-department-sections/department-goals/DepartmentGoals.scss";
import "./components/chemical-environmental-engineering-department-sections/department-faculty-members/FacultyMembers.scss";
import "./components/chemical-environmental-engineering-department-sections/department-news-section/LatestNews.scss";
import "./components/chemical-environmental-engineering-department-sections/study-plan-section/StudyPlan.scss";
import "./components/chemical-environmental-engineering-department-sections/depatment-header/DepartmentHeader.scss";

import "./components/mechanical-engineering-department-sections/department-goals/DepartmentGoals.scss";
import "./components/mechanical-engineering-department-sections/department-faculty-members/FacultyMembers.scss";
import "./components/mechanical-engineering-department-sections/department-news-section/LatestNews.scss";
import "./components/mechanical-engineering-department-sections/study-plan-section/StudyPlan.scss";
import "./components/mechanical-engineering-department-sections/depatment-header/DepartmentHeader.scss";

import Footer from "./components/footer/Footer";
import { React } from "react";
import { Almarai } from "next/font/google";
import ScrollToTop from "./components/ScrollToTopBtn";
import Breadcrumb from "./components/breadCrumb-nav/BreadCrumbs";
import { AppWrapperProvider } from "./context/index";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Janzour College",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={`${almarai.variable} antialiased`} key="hydration-body">
        <AppWrapperProvider>
          <div className={styles.header_desktop}>
            <Header />
            <Breadcrumb />
          </div>
          <div className={styles.header_mobile}>
            <HeaderMobile />
          </div>
          {children}
          <ScrollToTop />
          <Footer />
        </AppWrapperProvider>
      </body>
    </html>
  );
}
