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
          نبذة عن قسم<span> الهندسة النفطية </span>{" "}
        </p>

        <p className="department-summary">
          جاء إنشاء قسم الهندسة النفطية في كلية التقنية الهندسية - جنزور
          استجابةً لرغبة الكلية في تعزيز سوق العمل النفطي من خلال تأهيل الكوادر
          المتخصصة في هذا المجال. يركز القسم على تقديم خدمات تعليمية تجمع بين
          النظرية والتطبيق، مع استخدام التقنيات الحديثة مثل برامج الحاسوب،
          بالإضافة إلى تنظيم الزيارات الميدانية واستكشاف شبكة المعلومات.
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
