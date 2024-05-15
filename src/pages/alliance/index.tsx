import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import LedingApply from '../../components/Lending/LendingApply/LedingApply';
import AllianceBenefit from '../../components/Alliance/AllianceBenefit/AllianceBenefit';
import AllianceMain from '../../components/Alliance/AllianceMain/AllianceMain';
import Nav from '../../components/Nav/Nav';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Nav/>
      <LedingApply />
      <AllianceMain />
      <AllianceBenefit />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>몽글몽글 제휴문의</title>;
