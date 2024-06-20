import React from 'react';
import * as styles from './SuccessSurvey.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
const SuccessSurvey = () => {
  return (
    <section className={styles.SuccessSurveyWrapper}>
      <div className={styles.SuccessSurveyTitle}>제출완료</div>
      <div className={styles.SuccessSurveyDescription}>
        몽글에 등록해주셔서 감사합니다.
        <br />
        기다려주시면 빠르게 회신드리겠습니다.
      </div>
      <StaticImage
        src="../../../images/lending/lending_apply_image.png"
        alt="LendingApplyImage"
        className={styles.SuccessImage}
      />
    </section>
  );
}

export default SuccessSurvey;