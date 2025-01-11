import React from "react";
import Image from "next/image";
const AlameedMessage = ({ deanWord, deanPicture }) => {
  return (
    <div className="alameed-section">
      <div className="alameed-section-head">
        <p>
          كلمة
          <span> العميد</span>
        </p>
      </div>
      <hr />
      <div className="alameed-section-content">
        <div className="alameed-img-box">
          <Image
            src="/images/alameed-section-img.jpg"
            alt="dean-image"
            width={722}
            height={840}
            // layout="responsive"
            priority={true}
          />
        </div>
        <div className="alameed-text-content">
          <p className="alameed-text">
            <span>”</span>
            {deanWord.substring(1, deanWord.length - 1)}

            <span>“</span>
          </p>

          <p className="alameed-name">
            أ.د. عزالدين الشريف, عميد كلية التقنية الهندسية جنزور
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlameedMessage;
