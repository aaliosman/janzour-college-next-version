import React from "react";
import Image from "next/image";

const ItDepartmentHeader = () => {
  return (
    <header className="it-department-header">
      <Image
        objectFit="cover"
        fill
        className="header-bg-img"
        src={"/images/departments-bg.jpg"}
        alt="department-bg"
      />
      <div className="it-department-header-content">
        <p className="title">
          نبذة عن قسم <span>الهندسة الكيميائية والبيئية</span>{" "}
        </p>

        <p className="department-summary">
          تُعتبر أهمية التعليم الهندسي التقني في التنمية الاقتصادية والاجتماعية
          والصناعية محور اهتمام ليبيا، حيث تهدف إلى توفير عناصر مدربة على أحدث
          أساليب تطبيق العلوم النظرية والعملية. تأسس قسم الهندسة الكيميائية في
          عام 1992 بالمركز العالي للمهن الميكانيكية، ثم تحول إلى قسم العمليات
          النفطية في عام 2007، حتى تم اعتماد شعبة الهندسة البيئية في عام 2015،
          ليصبح اسمه قسم الهندسة الكيميائية والبيئية التابع لكلية التقنية
          الهندسية - جنزور.
        </p>

        <div className="header-content-info">
          <div className="single-info">
            <img src="/images/Two-user.png" alt="user-icon" />
            <p>30 عضو هيئة تدريس</p>
          </div>

          <div className="single-info">
            <img src="/images/Checklist.png" alt="user-icon" />
            <p>30 عضو هيئة تدريس</p>
          </div>

          <div className="single-info">
            <img src="/images/Two-user.png" alt="user-icon" />
            <p>30 عضو هيئة تدريس</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ItDepartmentHeader;
