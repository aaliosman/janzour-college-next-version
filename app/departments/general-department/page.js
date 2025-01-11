"use client";
import React from "react";
import GeneralDepartmentHeader from "@/app/components/general-department-sections/depatment-header/GeneralDepartmentHeader";
import DepartmentGoals from "@/app/components/general-department-sections/department-goals/DepartmentGoals";
import FacultyMembers from "@/app/components/general-department-sections/department-faculty-members/FacultyMembers";
import LatestNews from "@/app/components/general-department-sections/department-news-section/LatestNews";
import StudyPlan from "@/app/components/general-department-sections/study-plan-section/StudyPlan";
const GeneralDepartment = () => {
  return (
    <main className="general-department-main">
      <GeneralDepartmentHeader />
      <DepartmentGoals />
      <FacultyMembers />
      <LatestNews />
      <StudyPlan />
    </main>
  );
};

export default GeneralDepartment;
