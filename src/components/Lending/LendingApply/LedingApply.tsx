import React from 'react';
import * as styles from './LendingApply.module.scss';

const LedingApply = () => {
  return (
    <section className={styles.LendingApplyWrapper}>
      <main className={styles.LendingApplyContainer}>
        <div className={styles.LendingApplyHeader}>
          <div>빠르고 확실한</div>
          <div>반려견 출장 목욕 서비스</div>
        </div>
        <div className={styles.LendingApplyDescription}>
          <span>출장목욕에 관심있는 반려인에게</span>
          <span>출장목욕을 홍보하고 편리하게 예약 관리를 하고 싶으신가요?</span>
        </div>
        <button className={styles.LendingApplyButton}>혜택받고 등록하기</button>
      </main>
    </section>
  );
};

export default LedingApply;
