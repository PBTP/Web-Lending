import React from 'react';
import * as styles from './LendingApply.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const LedingApply = () => {
  return (
    <section className={styles.LendingApplyWrapper}>
      <main className={styles.LendingApplyContainer}>
        <div className={styles.LendingApplyHeader}>
          <div>빠르고 확실한</div>
          <div>반려견 출장 목욕 서비스</div>
        </div>
        <div className={styles.LendingApplyDescription}>
          <div>출장목욕에 관심있는 반려인에게</div>
          <div>출장목욕을 홍보하고 편리하게 예약 관리를 하고 싶으신가요?</div>
        </div>
        <button className={styles.LendingApplyButton}>혜택받고 등록하기</button>
        <StaticImage
          src="../../../images/lending_apply_image.png"
          alt="LendingApplyImage"
          className={styles.LendingImage}
        />
      </main>
    </section>
  );
};

export default LedingApply;
