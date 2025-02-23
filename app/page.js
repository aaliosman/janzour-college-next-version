'use client';
import React from 'react';
import CollegeActivity from './components/homePage-sections/collegeActivity-section/CollegeActivity';
import StudentsActivity from './components/homePage-sections/collegeActivity-section/StudentsActivity';
import TopFiveStudents from './components/homePage-sections/topFiveStudents-section/TopFiveStudents';
import AboutCollegeSection from './components/homePage-sections/aboutCollege-section/AboutCollegeSection';
import JournalPostsSection from './components/homePage-sections/journalPosts-section/JournalPostsSection';
import CollegeStatisticsSection from './components/homePage-sections/collegeStatistics-section/CollegeStatisticsSection';
import SuccessStorie from './components/homePage-sections/successStories-section/SuccessStorie';
import ScholarShipsAndJobs from './components/homePage-sections/scholarShips-jobs-section/ScholarShips';
import WorkSops from './components/homePage-sections/workShops-section/WorkShops';
import FAQ from './components/homePage-sections/faq-section/FAQ';
// 17 31 37, 33 college id
import { useAppContext } from './context/index';
export default function Home() {
  const { isLoading1 } = useAppContext();

  return (
    <main>
      <>
        <h1>Test Auto Deployment From Git Repo</h1>
        <AboutCollegeSection />
        <CollegeStatisticsSection />
        <JournalPostsSection />
        <CollegeActivity />
        <StudentsActivity />
        <TopFiveStudents />
        <SuccessStorie />
        <ScholarShipsAndJobs />
        <WorkSops />
        <FAQ />
      </>
    </main>
  );
}
