"use client";
import { useAppContext } from "@/app/context";
import React from "react";
import styles from "./Calendar.module.scss";
import TableComponent from "./Table";
import { academicCalendar } from "../../data";

const CalendarPage = () => {
  const academicCalendarData = academicCalendar && academicCalendar.data;

  const notes = academicCalendarData.notes || [];

  const testNotesArray = [
    "يُنصح الطلاب بالتأكد من الاطلاع على الشروط المحددة للكلية.",
    "من المهم التقديم في المواعيد المحددة، حيث أن التقديم المتأخر قد يؤدي إلى عدم القبول.",
  ];

  if (academicCalendarData.isLoading) {
    return <div className="loader"></div>;
  }
  return (
    <div className={styles.calendar_main}>
      <div className={styles.study_program_head}>
        <div className={styles.calendar_study_program_title}>
          <p>
            <span> الخطة الدراسية </span> للفصل الدراسي{" "}
            {academicCalendarData.termCaption}
          </p>
        </div>
        <hr />
        <div className={styles.calendar_study_program_text}>
          <p>{academicCalendarData.aboutStudyProgram || ""}</p>
        </div>
      </div>

      <div className={styles.study_plan}>
        <TableComponent
          academicCalendarData={academicCalendarData && academicCalendarData}
          useFor={"SemesterPlan"}
        />
      </div>

      <div className={styles.study_program_head}>
        <div className={styles.calendar_study_program_title}>
          <p>
            <span> عدد المحاضرات لكل شهر </span> للفصل الدراسي{" "}
            {academicCalendarData.termCaption}
          </p>
        </div>
        <hr />
        <div className={styles.calendar_study_program_text}>
          <p>{academicCalendarData.aboutNumberLectures || ""}</p>
        </div>
      </div>

      <div className={styles.study_plan}>
        <TableComponent
          academicCalendarData={academicCalendarData && academicCalendarData}
          useFor={"studyPlan"}
        />
      </div>

      <div className={styles.extra_notes}>
        <p className={styles.extra_notes_title}>ملاحظات إضافية</p>
        <div className={styles.notes_container}>
          <ol>
            {testNotesArray.map((note, index) => {
              return (
                <li key={index} className={styles.single_note}>
                  {note}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
