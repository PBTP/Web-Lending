import React from 'react';
import * as styles from './LendingReservation.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const LendingReservation = () => {
  return (
    <section className={styles.LendingReservationWrapper}>
      <div className={styles.LendingReservationText}>
        <div>반려견의 건강과 미용을 위한 모든 것,</div>
        <div>한번에 예약하세요</div>
      </div>
      <div className={styles.LendingReservationImage}>
        <StaticImage src="../../../images/lending/lending_reservation_1.png" alt="LendingReservation1" />
        <StaticImage src="../../../images/lending/lending_reservation_2.png" alt="LendingReservation2" />
        <StaticImage src="../../../images/lending/lending_reservation_3.png" alt="LendingReservation3" />
      </div>
    </section>
  );
};

export default LendingReservation;
