import React, { useEffect, useState } from 'react';
import * as styles from './AllianceContact.module.scss';
import AllianceInputField from '../BaseComponents/AllianceInputField';
import { StaticImage } from 'gatsby-plugin-image';

const PlatformList = ['업체 홈페이지', '네이버 블로그', '인스타그램', '구글 폼', '전화예약'];

const AllianceContact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    store: '',
    snsLink: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo((prevContactInfo) => ({
      ...prevContactInfo,
      [name]: value,
    }));
  };

  const [selectedPlatformList, setSelectedPlatformList] = useState<string[]>([]);

  const handleSelectedPlatformList = (platform: string) => {
    if (selectedPlatformList.includes(platform)) {
      setSelectedPlatformList(selectedPlatformList.filter((item) => item !== platform));
      return;
    }

    setSelectedPlatformList([...selectedPlatformList, platform]);
  };

  const [selectedInterview, setSelectedInterview] = useState<boolean>(false);

  const { snsLink, ...validatedContactInfo } = contactInfo;
  const validatedBenefitButton =
    Object.values(validatedContactInfo).every((info) => info.length > 0) && selectedPlatformList.length > 0;

  const handleBenefitButton = () => {
    //api로직 추가
    if (!validatedBenefitButton) return;
  };

  return (
    <section className={styles.AllianceContactWrapper}>
      <div className={styles.AllianceContactHeader}>
        <div className={styles.AllianceContactTitle}>Contact</div>
        <div className={styles.AllianceContactSubTitle}>지금 등록하고 혜택받기</div>
      </div>
      <div className={styles.AllianceContactContainer}>
        <AllianceInputField
          title="성함"
          value={contactInfo.name}
          onChange={handleInputChange}
          placeholder="김몽글"
          name="name"
        />
        <AllianceInputField
          title="이메일 주소"
          value={contactInfo.email}
          onChange={handleInputChange}
          placeholder="mongle@mongle.com"
          name="email"
        />
        <AllianceInputField
          title="휴대폰 번호"
          value={contactInfo.phone}
          onChange={handleInputChange}
          description="숫자만 입력해주세요."
          placeholder="01012345678"
          name="phone"
        />
        <AllianceInputField
          title="업체명"
          value={contactInfo.store}
          onChange={handleInputChange}
          description="(직영 또는 가맹점이라면) 몇호점까지 입력해주세요."
          placeholder="몽글몽글 2호점"
          name="store"
        />

        <div className={styles.AllianceContactPlatformContent}>
          <div className={styles.AllianceContactPlatformHeader}>
            <span className={styles.AllianceContactPlatformTitle}>현재 이용 중인 예약 플랫폼</span>
            <span className={styles.AllianceContactPlatformRequire}>*</span>
            <span className={styles.AllianceContactPlatformSubTitle}>복수 선택 가능</span>
          </div>
          <div className={styles.AllianceContactPlatformLine}>
            {PlatformList.map((platfrom, idx) => (
              <div
                key={platfrom + idx}
                onClick={() => handleSelectedPlatformList(platfrom)}
                className={styles.AllianceContactPlatformField}
              >
                {selectedPlatformList.includes(platfrom) ? (
                  <StaticImage src="../../../images/alliance/alliance_contact_checked.svg" alt="checked" />
                ) : (
                  <StaticImage src="../../../images/alliance/alliance_contact_un_checked.svg" alt="unChecked" />
                )}
                <div className={styles.AllianceContactPlatformName}>{platfrom}</div>
              </div>
            ))}
          </div>
        </div>

        <AllianceInputField
          title="SNS 주소"
          value={contactInfo.snsLink}
          onChange={handleInputChange}
          required={false}
          placeholder="홈페이지, 블로그, 인스타그램 등"
          name="snsLink"
        />

        <div className={styles.AllianceContactInterviewContent}>
          <div onClick={() => setSelectedInterview((prev) => !prev)} className={styles.AllianceContactInterviewLine}>
            {selectedInterview ? (
              <StaticImage
                width={24}
                height={24}
                layout="fixed"
                src="../../../images/alliance/alliance_contact_checked.svg"
                alt="checked"
              />
            ) : (
              <StaticImage
                width={24}
                height={24}
                layout="fixed"
                src="../../../images/alliance/alliance_contact_un_checked.svg"
                alt="unChecked"
              />
            )}
            <div className={styles.AllianceContactInterviewHeader}>
              <div className={styles.AllianceContactInterviewTitle}>앱 개발을 위한 전화 인터뷰 가능</div>
              <div className={styles.AllianceContactInterviewSubTitle}>
                *인터뷰시 1개월간 메인화면에 무료 광고를 제공합니다.
              </div>
            </div>
          </div>
        </div>
        <button className={styles.AllianceContactButton} disabled={!validatedBenefitButton}>
          혜택받고 등록하기
        </button>
      </div>
    </section>
  );
};

export default AllianceContact;
