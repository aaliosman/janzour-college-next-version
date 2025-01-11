"use client";
import React from "react";
import DepartmentHeader from "../../components/electrical-electronic-engineering-department-sections/depatment-header/DepartmentHeader";
import DepartmentGoals from "../../components/electrical-electronic-engineering-department-sections/department-goals/DepartmentGoals";
import FacultyMembers from "../../components/electrical-electronic-engineering-department-sections/department-faculty-members/FacultyMembers";
import LatestNews from "../../components/electrical-electronic-engineering-department-sections/department-news-section/LatestNews";
import StudyPlan from "../../components/electrical-electronic-engineering-department-sections/study-plan-section/StudyPlan";
const ElectricalElectronicDepartment = () => {
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

export default ElectricalElectronicDepartment;
