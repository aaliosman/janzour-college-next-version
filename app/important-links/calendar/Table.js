import React, { Fragment } from "react";
import styles from "./Calendar.module.scss";

const TableComponent = ({ academicCalendarData, useFor }) => {
  const semesterPlansData = academicCalendarData.semesterPlans || [];
  const studyPlansData = academicCalendarData.studyPlans || [];

  const sortedSemesterPlans = semesterPlansData.map((item, index) => ({
    ...item,
    number: index + 1,
  }));

  const sortedStudyPlans = studyPlansData.map((item, index) => ({
    ...item,
    number: index + 1,
  }));

  return (
    <Fragment>
      {useFor === "SemesterPlan" ? (
        <table className={styles.table}>
          <thead className={styles.table_head}>
            <tr className={styles.table_row}>
              <th className={styles.table_row_title}>#</th>
              <th className={styles.table_row_title}>البند</th>
              <th className={styles.table_row_title}>الأسبوع</th>
              <th className={styles.table_row_title}>التاريخ</th>
            </tr>
          </thead>
          <tbody className={styles.table_body}>
            {sortedSemesterPlans.map((item) => (
              <tr key={item.number} className={styles.table_row}>
                <td className={styles.table_data}>{item.number}</td>
                <td className={styles.table_data}>{item.item}</td>
                <td className={styles.table_data}>{item.week}</td>
                <td className={styles.table_data}>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : useFor === "studyPlan" ? (
        <table className={styles.table}>
          <thead className={styles.table_head}>
            <tr className={styles.table_row}>
              <th className={styles.table_row_title}>#</th>
              <th className={styles.table_row_title}>الشهر (فصل الخريف)</th>
              <th className={styles.table_row_title}>عدد الاسابيع</th>
              <th className={styles.table_row_title}>الامتحان النصفي الأول</th>
            </tr>
          </thead>
          <tbody className={styles.table_body}>
            {sortedStudyPlans.map((item) => (
              <tr key={item.number} className={styles.table_row}>
                <td className={styles.table_data}>{item.number}</td>
                <td className={styles.table_data}>{item.month}</td>
                <td className={styles.table_data}>{item.weeksCount}</td>
                <td className={styles.table_data}>{item.firstMidtermExam}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      {/* <table className={styles.table}>
      <thead className={styles.table_head}>
        <tr className={styles.table_row}>
          <th className={styles.table_row_title}>#</th>
          <th className={styles.table_row_title}>البند</th>
          <th className={styles.table_row_title}>الإسبوع</th>
          <th className={styles.table_row_title}>التاريخ</th>
        </tr>
      </thead>
      <tbody className={styles.table_body}>
        {sortedSemesterPlans.map((item) => (
          <tr key={item.number} className={styles.table_row}>
            <td className={styles.table_data}>{item.number}</td>
            <td className={styles.table_data}>{item.item}</td>
            <td className={styles.table_data}>{item.week}</td>
            <td className={styles.table_data}>{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table> */}
    </Fragment>
  );
};

export default TableComponent;
