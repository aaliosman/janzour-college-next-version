import React from "react";

const DepartmentGoals = () => {
  return (
    <div className="department-main">
      <div className="department-content">
        <div className="department-content-top-box">
          <div className="study-fields">
            <p className="title">🏬 مجالات الدراسة </p>
            <ul>
              <p className="study-fields-text">تشمل مجالات الدراسة في القسم:</p>
              <li>أنظمة التصميم الميكانيكي </li>
              <li>توليد الطاقة</li>
              <li>التصنيع</li>
              <li>التصميم والتصنيع باستخدام الحاسب</li>
              <li>تكييف الهواء</li>
              <li>تحلية المياه</li>
              <li>إدارة الطاقة</li>
            </ul>
          </div>

          <div className="available-specializations">
            <p className="title">🏫 التخصصات المتاحة</p>

            <ul>
              <p className="study-apport-text">
                يضم القسم مجموعة من التخصصات، وهي:
              </p>
              <li>شعبة هندسة تقنيات محطات القوى</li>
              <li>شعبة هندسة تقنيات الإنتاج</li>
              <li>شعبة هندسة تقنيات اللحام</li>
              <li>شعبة تقنيات الهندسة الصناعية</li>
              <li>شعبة هندسة تقنيات أنابيب وأوعية الضغط</li>
            </ul>
          </div>
        </div>

        <div className="study-apport">
          <p className="title">💼 فرص العمل </p>
          <ul>
            <p className="study-apport-text">
              يحظى طلاب القسم بكل اهتمام، مما يتيح لهم فرصًا مميزة في المؤسسات
              الصناعية. يبرز ذلك من خلال حصولهم على وظائف في قطاعات هندسية
              متنوعة مثل:
            </p>
            <li>محطات توليد القوى</li>
            <li>محطات تحلية المياه</li>
            <li>شركات تكرير النفط والبتروكيماويات</li>
            <li>القطاعات الحكومية والخاصة</li>
          </ul>
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
