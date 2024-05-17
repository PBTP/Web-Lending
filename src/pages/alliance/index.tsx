import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import LedingApply from '../../components/Lending/LendingApply/LedingApply';
import AllianceBenefit from '../../components/Alliance/AllianceBenefit/AllianceBenefit';
import AllianceMain from '../../components/Alliance/AllianceMain/AllianceMain';
import Nav from '../../components/Layout/Nav/Nav';
import AllianceContact from '../../components/Alliance/AllianceContact/AllianceContact';
import Layout from '../../components/Layout/Layout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <LedingApply />
        <AllianceMain />
        <AllianceBenefit />
        <AllianceContact />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>몽글몽글 제휴문의</title>;
