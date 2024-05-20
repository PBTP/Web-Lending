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
          <div>반려견의 건강과 미용 서비스를 한 곳에서 모아보고</div>
          <div>효율적으로 관리하세요.</div>
        </div>
        <button className={styles.LendingApplyButton}>혜택받고 등록하기</button>
        <StaticImage
          src="../../../images/lending/lending_apply_image.png"
          alt="LendingApplyImage"
          className={styles.LendingImage}
        />
      </main>
    </section>
  );
};

export default LedingApply;
