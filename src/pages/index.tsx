import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import LedingApply from '../components/Lending/LendingApply/LedingApply';
import '../global.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <LedingApply />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>몽글몽글</title>;
