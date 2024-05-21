import React from 'react';
import * as styles from './LendingReview.module.scss';
import LendingFlexContent from '../BaseComponents/LendingFlexContent';
import { StaticImage } from 'gatsby-plugin-image';

const LendingReview = () => {
  return (
    <section className={styles.LendingStoreWrapper}>
      <LendingFlexContent>
        <div>
          <LendingFlexContent.Header>
            <div>미용, 목욕 꿀팁을</div>
            <div>공유하고</div>
            <div>이야기해봐요!</div>
          </LendingFlexContent.Header>
          <LendingFlexContent.Description>
            <div>솔직한 후기를</div>
            <div>사진과 리뷰로 확인해보세요</div>
          </LendingFlexContent.Description>
        </div>
        <LendingFlexContent.Image>
          <StaticImage
            src="../../../images/lending/lending_review_mbReview.png"
            alt="LendingReservation1-mobile"
          />
        </LendingFlexContent.Image>
      </LendingFlexContent>
    </section>
  );
};

export default LendingReview;
