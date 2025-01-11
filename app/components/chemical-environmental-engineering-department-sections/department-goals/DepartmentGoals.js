import React from "react";

const DepartmentGoals = () => {
  return (
    <div className="department-content">
      <div className="department-goals-and-importance">
        <div className="goals">
          <p className="title">🎯 أهداف القسم</p>
          <p className="goals-text">
            يهدف القسم إلى إعداد مهندسين يتمتعون بقدرات عالية، مزودين بأحدث
            الأساليب العلمية والعملية. يركز على تزويد الطلاب بالمعرفة اللازمة
            للتخصصات الهندسية الحيوية، مثل القدرة الكهربائية، تقنيات التحكم
            الآلي، والاتصالات، والتي تُعتبر من الأسرع نموًا في مجالات المعرفة.
          </p>
        </div>

        <div className="department-capabilities">
          <p className="title">🔬 إمكانيات القسم</p>
          <p className="department-capabilities-text">
            يهدف القسم إلى إعداد مهندسين يتمتعون بقدرات عالية، مزودين بأحدث
            الأساليب العلمية والعملية. يركز على تزويد الطلاب بالمعرفة اللازمة
            للتخصصات الهندسية الحيوية، مثل القدرة الكهربائية، تقنيات التحكم
            الآلي، والاتصالات، والتي تُعتبر من الأسرع نموًا في مجالات المعرفة.
          </p>
        </div>
      </div>

      <div className="downloads">
        <button className="download-btn">
          <span> أعضاء هيئة التدريس</span>
          <img src="/images/Arrow - Bottom.png" alt="download icon" />
        </button>
        <button className="download-btn">
          <span>آخر الأخبار</span>
          <img src="/images/Arrow - Bottom.png" alt="download icon" />
        </button>
        <button className="download-btn">
          <span>الخطة الدراسية</span>
          <img src="/images/Arrow - Bottom.png" alt="download icon" />
        </button>
        <button className="download-btn">
          <span>الجدول</span>
          <img src="/images/Arrow - Bottom.png" alt="download icon" />
        </button>
      </div>
    </div>
  );
};

export default DepartmentGoals;
