import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import LedingApply from '../components/Lending/LendingApply/LedingApply';
import LendingReservation from '../components/Lending/LendingReservation/LendingReservation';
import LendingStore from '../components/Lending/LendingStore/LendingStore';
import Layout from '../components/Layout/Layout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <LedingApply />
        <LendingReservation />
        <LendingStore />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>몽글</title>;
