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
          نبذة عن قسم <span> نظم تقنيات الحاسوب </span>{" "}
        </p>

        <p className="department-summary">
          يعتبر القسم العام من الأقسام الأساسية في كلية التقنية الهندسية، حيث
          يهدف إلى تقديم العلوم الأساسية التي تدعم التخصصات الهندسية المختلفة
          وتشمل الرياضيات و الفيزياء والكيمياء و اللغة الإنجليزية و الإحصاء و
          مهارات التواصل والتعبير، ويركز هذا القسم على تزويد الطلاب بالمعرفة
          والمهارات الأساسية اللازمة التي تساهم في تعزيز قدرات الطلاب وتمنحهم
          فرصة استكشاف اهتماماتهم الأكاديمية، مما يعزز فرص نجاحهم في التخصصات
          الهندسية.
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
