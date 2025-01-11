"use cleint";
import React from "react";
import { useAppContext } from "../../../context/index";
import { homePageData } from "../../../data";

const CollegeStatisticsSection = ({ data }) => {
  // const { collegeStatisticsData } = useAppContext();
  const collegeStatisticsData =
    homePageData && homePageData.data.collegeStatistics;
  return (
    <div className="college-statistics-section">
      <div className="statistics-head">
        <p>
          <span>إحصائيات</span> الكلية
        </p>
      </div>
      <hr />
      <div className="statistics-text">
        <p>{collegeStatisticsData.aboutCollegeStatistics}</p>
      </div>

      <div className="statistics">
        <div className="sigle-statistic">
          <img
            src="/images/statistic-img-1 (1).png"
            alt="sigle-statistic-image"
          />

          <div className="statistic-info">
            <p className="statistic-number">
              {collegeStatisticsData.numberGraduates}
            </p>
            <p className="statistic-text">عدد خريجين الكلية</p>
          </div>
        </div>

        <div className="sigle-statistic">
          <img src="/images/statistic-img-2.png" alt="sigle-statistic-image" />

          <div className="statistic-info">
            <p className="statistic-number">
              {collegeStatisticsData.collegeDepartments}
            </p>
            <p className="statistic-text">أقسام لدى الكلية</p>
          </div>
        </div>

        <div className="sigle-statistic">
          <img src="/images/statistic-img-3.png" alt="sigle-statistic-image" />

          <div className="statistic-info">
            <p className="statistic-number">
              {collegeStatisticsData.numberFacultyMembers}
            </p>
            <p className="statistic-text">عدد أعضاء هيئة التدريس</p>
          </div>
        </div>

        <div className="sigle-statistic">
          <img src="/images/statistic-img-3.png" alt="sigle-statistic-image" />

          <div className="statistic-info">
            <p className="statistic-number">
              {collegeStatisticsData.numberStudents}
            </p>
            <p className="statistic-text">عدد الطلبة في الكلية</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeStatisticsSection;
