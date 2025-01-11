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
          نبذة عن قسم <span>الهندسة الميكانيكية </span>{" "}
        </p>

        <p className="department-summary">
          يُعد قسم الهندسة الميكانيكية من أول الأقسام العلمية التي تأسست في كلية
          التقنية الهندسية. يغطي مجال الدراسة بالقسم موضوعات شاملة تتعلق
          بالاحتياجات الصناعية، بالإضافة إلى مقررات تُعد الطلاب ليكونوا على
          دراية بأحدث مجالات الهندسة الميكانيكية.
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
