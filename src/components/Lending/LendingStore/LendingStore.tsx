import React from 'react';
import * as styles from './LendingStore.module.scss';
import LendingFlexContent from '../BaseComponents/LendingFlexContent';
import ReviewMbSvg from '../../../images/lending/lending_review_mbReview.inline.svg';
import ReviewPcSvg from '../../../images/lending/lending_review_pcReview.inline.svg';

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
        <div className={styles.LendingStoreMbImageWrapper}>
          <ReviewMbSvg />
        </div>
        <LendingFlexContent.Image>
          <ReviewPcSvg />
        </LendingFlexContent.Image>
      </LendingFlexContent>
    </section>
  );
};

export default LendingStore;
