import React from 'react';
import * as styles from './LendingReservation.module.scss';
import Reservation1 from '@images/lending/lending_reservation_1.inline.svg';
import Reservation2 from '@images/lending/lending_reservation_2.inline.svg';
import Reservation3 from '@images/lending/lending_reservation_3.inline.svg';

const LendingReservation = () => {
  return (
    <section className={styles.LendingReservationWrapper}>
      <div className={styles.LendingReservationText}>
        <div>
          반려견의 건강과 <br />
          미용을 위한 모든 것,
        </div>
        <div>한번에 예약하세요</div>
      </div>
      <div className={styles.LendingReservationImage}>
        <Reservation1 />
        <Reservation2 />
        <Reservation3 />
      </div>
    </section>
  );
};

export default LendingReservation;
