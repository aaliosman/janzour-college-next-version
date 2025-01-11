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

        <div className="department-english-language">
          <p className="title">🌐 اللغة الإنجليزية</p>
          <p className="english-language-text">
            يعتمد القسم اللغة الإنجليزية كمبدأ أساسي في تدريس المناهج، إلى جانب
            اللغة الأم، نظرًا لأنها اللغة الرسمية المستخدمة في شركات النفط في
            التقارير اليومية والاستشارات الهندسية. وبما أن معظم الشركات الأجنبية
            التي تقدم الخدمات الهندسية والاستشارية هي من جنسيات متعددة، فإن
            إتقان اللغة الإنجليزية يعد ضروريًا.
          </p>
        </div>

        <div className="specializations-links">
          <p className="title">⚒️ الربط مع المجالات الأخرى</p>
          <p className="specializations-links-text">
            يسعى القسم أيضًا إلى ربط الطلاب بالمجالات الأخرى التي أصبحت من
            متطلبات الصناعة، مما يساعدهم في تحقيق تكامل مهني وتطوير مهاراتهم بما
            يتناسب مع احتياجات سوق العمل.
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
