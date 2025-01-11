"use cleint";
import { useAppContext } from "../../../context/index";
import React from "react";
import AccordionComponent from "./Accordion";
import { homePageData } from "../../../data";

const FAQ = () => {
  // const { frequentlyAskedQuestions } = useAppContext();

  const frequentlyAskedQuestions =
    homePageData && homePageData.data.frequentlyAskedQuestions;

  const questions = [
    {
      question: "ما هي مواعيد قبول الطلبة الجدد؟",
      answer:
        "عادةً ما يتم قبول الطلبة الجدد في بداية فصل الخريف في شهر سبتمبر.",
    },
    {
      question: "هل يوجد امتحان مفاضلة؟",
      answer:
        "عادةً ما يتم قبول الطلبة الجدد في بداية فصل الخريف في شهر سبتمبر.",
    },
    {
      question: "ما هي مواعيد قبول الطلبة الجدد؟",
      answer:
        "عادةً ما يتم قبول الطلبة الجدد في بداية فصل الخريف في شهر سبتمبر.",
    },
    {
      question: "ما هي مواعيد قبول الطلبة الجدد؟",
      answer:
        "عادةً ما يتم قبول الطلبة الجدد في بداية فصل الخريف في شهر سبتمبر.",
    },
    {
      question: "ما هي مواعيد قبول الطلبة الجدد؟",
      answer:
        "عادةً ما يتم قبول الطلبة الجدد في بداية فصل الخريف في شهر سبتمبر.",
    },
    {
      question: "هل يوجد امتحان مفاضلة؟",
      answer:
        "عادةً ما يتم قبول الطلبة الجدد في بداية فصل الخريف في شهر سبتمبر.",
    },
    {
      question: "ما هي مواعيد قبول الطلبة الجدد؟",
      answer:
        "عادةً ما يتم قبول الطلبة الجدد في بداية فصل الخريف في شهر سبتمبر.",
    },
    {
      question: "ما هي مواعيد قبول الطلبة الجدد؟",
      answer:
        "عادةً ما يتم قبول الطلبة الجدد في بداية فصل الخريف في شهر سبتمبر.",
    },
    {
      question: "هل يوجد امتحان مفاضلة؟",
      answer:
        "عادةً ما يتم قبول الطلبة الجدد في بداية فصل الخريف في شهر سبتمبر.",
    },
    {
      question: "ما هي مواعيد قبول الطلبة الجدد؟",
      answer:
        "عادةً ما يتم قبول الطلبة الجدد في بداية فصل الخريف في شهر سبتمبر.",
    },
    {
      question: "ما هي مواعيد قبول الطلبة الجدد؟",
      answer:
        "عادةً ما يتم قبول الطلبة الجدد في بداية فصل الخريف في شهر سبتمبر.",
    },
    {
      question: "هل يوجد امتحان مفاضلة؟",
      answer:
        "عادةً ما يتم قبول الطلبة الجدد في بداية فصل الخريف في شهر سبتمبر.",
    },
  ];
  return (
    <div className="faq-section">
      <div className="faq-head">
        <div className="faq-head-content">
          <p className="faq-title">
            <span> الشائعة</span> الأسئلة
          </p>
        </div>
        <hr />
        <div className="faq-head-text">
          <p>{frequentlyAskedQuestions.aboutFrequentlyAskedQuestions}</p>
        </div>
      </div>

      <div className="faq-content">
        <AccordionComponent
          questions={frequentlyAskedQuestions.frequentlyAskedQuestions}
        />
      </div>
    </div>
  );
};

export default FAQ;
