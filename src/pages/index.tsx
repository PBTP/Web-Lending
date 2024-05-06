import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import LedingApply from '../components/Lending/LendingApply/LedingApply';
import LendingReservation from '../components/Lending/LendingReservation/LendingReservation';
import LendingStore from '../components/Lending/LendingStore/LendingStore';
import LendingReview from '../components/Lending/LendingReview/LendingReview';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <LedingApply />
      <LendingReservation />
      <LendingStore />
      <LendingReview />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>몽글몽글</title>;
