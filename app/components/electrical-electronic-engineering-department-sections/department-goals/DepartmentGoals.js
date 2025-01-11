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

        <div className="department-importance">
          <p className="title">🏫 البرنامج الدراسي </p>
          <p className="study-program-text">
            يهدف البرنامج الدراسي إلى تعريف الطلاب بأساسيات الهندسة الكهربائية
            والإلكترونية وفروعها، مع متابعة التطورات السريعة في هذه المجالات.
            يعمل على تأهيل الطلاب ليصبحوا مهندسين كهربائيين تقنيين قادرين على
            التعامل مع مختلف فروع الهندسة الكهربائية والإلكترونية.
          </p>
        </div>

        <div className="available-specializations">
          <p className="title">💼 التخصصات المتاحة </p>
          <ol type="i">
            <li>
              تأسيس قاعدة معرفية من خلال تزويد الطلاب بأسس علمية قوية لدعم
              دراستهم في التخصصات الهندسية.
            </li>
            <li>
              تنمية المهارات التقنية والشخصية للطلاب، مما يسهل عليهم مواجهة
              التحديات الأكاديمية.
            </li>
            <li>
              الإعداد للتخصصات و تأهيل الطلاب للانتقال إلى التخصصات الهندسية
              بشكل سلس.
            </li>
          </ol>
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
