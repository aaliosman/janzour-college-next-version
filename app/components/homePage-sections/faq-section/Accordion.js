import React, { useState } from "react";

const AccordionComponent = ({ questions }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={"faqContainer"}>
      {questions.map((faq, index) => (
        <div
          key={index}
          className={`${"accordion"} ${openIndex === index ? "open" : ""}`}
        >
          <div
            className={"accordionSummary"}
            onClick={() => toggleAccordion(index)}
          >
            <h3>{faq.question}</h3>
            <img
              className={"icon"}
              src={
                openIndex === index ? "/images/Minus.png" : "/images/Plus.png"
              }
            />
          </div>
          <div className={"accordionDetails"}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionComponent;
