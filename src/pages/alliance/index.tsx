import React, { useState } from 'react';
import { HeadFC, PageProps } from 'gatsby';
import LedingApply from '@components/Lending/LendingApply/LedingApply';
import AllianceBenefit from '@components/Alliance/AllianceBenefit/AllianceBenefit';
import AllianceMain from '@components/Alliance/AllianceMain/AllianceMain';
import AllianceContact from '@components/Alliance/AllianceContact/AllianceContact';
import Layout from '@components/Layout/Layout';
import SuccessSurvey from '@src/components/Alliance/SuccessSurvey/SuccessSurvey';

type CustomLocationType = {
  shouldScrollToContact: boolean;
};

const IndexPage: React.FC<PageProps> = ({ location }) => {
  const state = location.state as CustomLocationType;
  const [isSuccessSurvey, setIsSuccessSurvey] = useState(false);
  return (
    <Layout>
      {isSuccessSurvey ? (
        <>
          <SuccessSurvey />
        </>
      ) : (
        <>
          <LedingApply />
          <AllianceMain />
          <AllianceBenefit />
          <AllianceContact
            shouldScrollToContact={state?.shouldScrollToContact}
            setIsSuccessSurvey={setIsSuccessSurvey}
          />
        </>
      )}
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>몽글 제휴문의</title>;
