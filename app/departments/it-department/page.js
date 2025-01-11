"use client";
import React from "react";
import ItDepartmentHeader from "../../components/it-department-sections/depatment-header/ItDepartmentHeader";
import DepartmentGoals from "../../components/it-department-sections/department-goals/DepartmentGoals";
import FacultyMembers from "../../components/it-department-sections/department-faculty-members/FacultyMembers";
import LatestNews from "../../components/it-department-sections/department-news-section/LatestNews";
import StudyPlan from "../../components/it-department-sections/study-plan-section/StudyPlan";
const ItDepartment = () => {
  return (
    <main className="general-department-main">
      <ItDepartmentHeader />
      <DepartmentGoals />
      <FacultyMembers />
      <LatestNews />
      <StudyPlan />
    </main>
  );
};

export default ItDepartment;
