import React from 'react';
import * as styles from './LendingStore.module.scss';
import LendingFlexContent from '../BaseComponents/LendingFlexContent';
import { StaticImage } from 'gatsby-plugin-image';

const LendingStore = () => {
  return (
    <section className={styles.LendingStoreWrapper}>
      <LendingFlexContent>
        <div>
          <LendingFlexContent.Header>
            <div>솔직한 후기로</div>
            <div>믿을만한 업체를</div>
            <div>선택하세요</div>
          </LendingFlexContent.Header>
          <LendingFlexContent.Description>
            <div>솔직한 후기를</div>
            <div>사진과 리뷰로 확인해보세요</div>
          </LendingFlexContent.Description>
        </div>
        <LendingFlexContent.Image>
          <StaticImage src="../../../images/lending/lending_reservation_1.png" alt="LendingReservation1" />
        </LendingFlexContent.Image>
      </LendingFlexContent>
    </section>
  );
};

export default LendingStore;
