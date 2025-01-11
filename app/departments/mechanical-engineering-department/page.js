"use client";
import React from "react";
import DepartmentHeader from "../../components/mechanical-engineering-department-sections/depatment-header/DepartmentHeader";
import DepartmentGoals from "../../components/mechanical-engineering-department-sections/department-goals/DepartmentGoals";
import FacultyMembers from "../../components/mechanical-engineering-department-sections/department-faculty-members/FacultyMembers";
import LatestNews from "../../components/mechanical-engineering-department-sections/department-news-section/LatestNews";
import StudyPlan from "../../components/mechanical-engineering-department-sections/study-plan-section/StudyPlan";
import styles from "./MechanicalEngineeringDepartment.module.scss";

const ChemilAndEnviroEngDepartment = () => {
  return (
    <main className={styles.department_main}>
      <DepartmentHeader />
      <DepartmentGoals />
      <FacultyMembers />
      <LatestNews />
      <StudyPlan />
    </main>
  );
};

export default ChemilAndEnviroEngDepartment;
