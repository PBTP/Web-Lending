import React from 'react';
import * as styles from './LendingApply.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import ApplyLink from '../../Common/ApplyLink';

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
        {typeof window !== 'undefined' && window.location.pathname === '/' && (
          <ApplyLink className={styles.LendingApplyButton} />
        )}
        <StaticImage
          src="../../../images/lending/lending_apply_image.png"
          alt="LendingApplyImage"
          className={styles.LendingApplyPcImage}
        />
        <div className={styles.LendingApplyMobileImageWrapper}>
          <StaticImage
            src="../../../images/lending/lending_apply_image.png"
            alt="LendingApplyImage"
            className={styles.LendingApplyMobileImage}
          />
        </div>
      </main>
    </section>
  );
};

export default LedingApply;
