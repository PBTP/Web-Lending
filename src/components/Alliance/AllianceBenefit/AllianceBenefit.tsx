import React from 'react';
import * as styles from './AllianceBenefit.module.scss';

const AllianceBenefit = () => {
  return (
    <section className={styles.AllianceBenefitWrapper}>
      <div className={styles.AllianceBenefitTitle}>Benefit</div>
      <div className={styles.AllianceBenefitSubTitle}>얼리버드 등록을 놓치면 안되는 이유</div>
      <div className={styles.AllianceBenefitContainer} data-aos="fade-up">
        <div className={styles.AllianceBenefitContent}>
          <div className={styles.AllianceBenefitBadge}>얼리버드 등록 업체만!</div>
          <div className={styles.AllianceBenefitText}>
            <div>3개월동안</div>
            <div>수수료 무조건 무료</div>
          </div>
          <div className={styles.AllianceBenefitSubText}>
            <div>몽글에서 가장 빨리 점유율을</div>
            <div>높이세요. 수수료 0원으로</div>
            <div>초기 단골 고객을 확보하세요</div>
          </div>
        </div>
        <div className={styles.AllianceBenefitContent}>
          <div className={styles.AllianceBenefitBadge}>얼리버드 등록 업체만!</div>
          <div className={styles.AllianceBenefitText}>
            <div>6개월동안</div>
            <div>고객 데이터, 퍼널 제공</div>
          </div>
          <div className={styles.AllianceBenefitSubText}>
            <div>우리 업체에 관심있고, 이용하는 고객들은</div>
            <div>누구일까요? 업체 운영에 유용한</div>
            <div>고객 데이터와 퍼널을 제공합니다.</div>
          </div>
        </div>
        <div className={styles.AllianceBenefitContent}>
          <div className={styles.AllianceBenefitBadge}>인터뷰 업체 혜택</div>
          <div className={styles.AllianceBenefitText}>
            <div>1개월동안</div>
            <div>메인화면에 무료 광고</div>
          </div>
          <div className={styles.AllianceBenefitSubText}>
            <div>인터뷰 진행으로 어플 개발에 도움을 주신</div>
            <div>업체에게 맞춤형으로 디자인된 광고를</div>
            <div>제공하며 메인화면에 노출됩니다.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllianceBenefit;
