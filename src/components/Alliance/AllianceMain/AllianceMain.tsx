import React from 'react';
import * as styles from './AllianceMain.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const AllianceMain = () => {
  return (
    <section className={styles.AllianceMainWrapper}>
      <div className={styles.AllianceMainHeader}>Main Service</div>
      <div className={styles.AllianceMainTitle}>
        <div>효과적인 홍보와</div>
        <div>편리한 예약관리</div>
      </div>
      <div className={styles.AllianceMainSubTitle}>
        예약 일정 관리와 고객 정보를 편하게 관리 할 수 있어요.
      </div>
      <div className={styles.AllianceMainBookingContent} data-aos="fade-up">
        <div className={styles.AllianceMainBooking}>
          <StaticImage
            src="../../../images/alliance/alliance_main_content_1.png"
            alt="allianceMainContent1"
            objectFit="contain"
          />
          <div>몽글 앱을 통한 노출 + 예약</div>
        </div>
        <div className={styles.AllianceMainBooking}>
          <div>고객, 반려동물 정보 확인 가능</div>
          <StaticImage
            src="../../../images/alliance/alliance_main_content_2.png"
            alt="allianceMainContent2"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.AllianceMainScheduleContent} data-aos="fade-up">
        <div className={styles.AllianceMainSchedule}>
          <StaticImage
            src="../../../images/alliance/alliance_main_content_3.png"
            alt="allianceMainContent3"
            objectFit="contain"
          />
          <StaticImage
            src="../../../images/alliance/alliance_main_content_4.png"
            alt="allianceMainContent4"
            objectFit="contain"
          />
        </div>
        <div className={styles.AllianceMainScheduleText}>캘린더로 한눈에 보는 스케쥴</div>
      </div>
      <div className={styles.AllianceMainManageContent} data-aos="fade-up">
        <div className={styles.AllianceMainManageText}>
          <div>카카오톡, 문자, 전화, 인스타 DM...</div>
          <div>복잡한 연락은 그만</div>
          <div>몽글은 하나로 관리할 수 있어요</div>
        </div>
        <StaticImage
          src="../../../images/alliance/alliance_main_content_5.png"
          alt="allianceMainContent5"
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default AllianceMain;
