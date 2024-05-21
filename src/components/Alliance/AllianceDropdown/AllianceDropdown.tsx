import React, { useState } from "react";
import * as styles from "./AllianceDropdown.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const districtList = [
  "서울특별시 전체",
  "경기도 전체",
  "수도권 전체",
  "부산광역시",
  "인천광역시",
  "대구광역시",
  "대전역시",
  "광주광역시",
  "강원도",
  "충청도",
  "전라도",
  "경상도",
  "제주도",
];

type AllianceDropdownProps = {
  selectedDistrict: string;
  setSelectedDistrict: React.Dispatch<string>;
};
const AllianceDropdown = ({
  selectedDistrict,
  setSelectedDistrict,
}: AllianceDropdownProps) => {
  const [activeDropdown, setActiveDropdown] = useState(false);

  return (
    <div className={styles.AllianceDropdownWrapper}>
      <div className={styles.AllianceInputFieldHeader}>
        <div className={styles.AllianceInputFieldTitle}>활동지역</div>
        <div className={styles.AllianceInputFieldRequire}>*</div>
      </div>
      <div
        className={styles.AllianceDropdownContainer}
        onClick={() => setActiveDropdown((prev) => !prev)}
      >
        <input
          className={styles.AllianceDropdownInput}
          value={selectedDistrict}
          placeholder="지역을 선택해주세요"
          readOnly
        />
        <StaticImage
          className={`${styles.AllianceDropdownArrow} ${
            activeDropdown ? styles.Active : ""
          } `}
          src="../../../images/arrow_drop_down.svg"
          alt="arrowDropDown"
        />
        {activeDropdown && (
          <div className={styles.AllianceDropdownDistrictWrapper}>
            {districtList.map((district, idx) => (
              <div
                key={district + idx}
                onClick={() => setSelectedDistrict(district)}
                className={styles.AllianceDropdownDistrict}
              >
                {district}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllianceDropdown;
