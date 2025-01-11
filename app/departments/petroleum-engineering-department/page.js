"use client";
import React from "react";
import DepartmentHeader from "../../components/petroleum-engineering-department-sections/depatment-header/DepartmentHeader";
import DepartmentGoals from "../../components/petroleum-engineering-department-sections/department-goals/DepartmentGoals";
import FacultyMembers from "../../components/petroleum-engineering-department-sections/department-faculty-members/FacultyMembers";
import LatestNews from "../../components/petroleum-engineering-department-sections/department-news-section/LatestNews";
import StudyPlan from "../../components/petroleum-engineering-department-sections/study-plan-section/StudyPlan";

const PetroleumEngineeringDepartment = () => {
  return (
    <main className="general-department-main">
      <DepartmentHeader />
      <DepartmentGoals />
      <FacultyMembers />
      <LatestNews />
      <StudyPlan />
    </main>
  );
};

export default PetroleumEngineeringDepartment;
