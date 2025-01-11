import React from "react";

const DepartmentGoals = () => {
  return (
    <div className="department-goals">
      <div className="goals">
        <p className="title">🎯 أهداف القسم</p>
        <ul>
          <li>
            تأسيس قاعدة معرفية من خلال تزويد الطلاب بأسس علمية قوية لدعم دراستهم
            في التخصصات الهندسية.
          </li>
          <li>
            تنمية المهارات التقنية والشخصية للطلاب، مما يسهل عليهم مواجهة
            التحديات الأكاديمية.
          </li>
          <li>
            الإعداد للتخصصات و تأهيل الطلاب للانتقال إلى التخصصات الهندسية بشكل
            سلس.
          </li>
        </ul>
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
