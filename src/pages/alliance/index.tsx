import React, { useState, useEffect, useRef } from 'react';
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
  const allianceContactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const disableScroll = (e: Event) => e.preventDefault();

    if (state?.shouldScrollToContact && allianceContactRef.current) {
      document.addEventListener('wheel', disableScroll, { passive: false });
      document.addEventListener('touchmove', disableScroll, { passive: false });

      allianceContactRef.current.scrollIntoView({ behavior: 'smooth' });

      // 스크롤이 완료된 후 스크롤 이벤트 활성화
      setTimeout(() => {
        document.removeEventListener('wheel', disableScroll);
        document.removeEventListener('touchmove', disableScroll);
      }, 1000); // 1초 후 스크롤 이벤트 활성화
    }

    return () => {
      document.removeEventListener('wheel', disableScroll);
      document.removeEventListener('touchmove', disableScroll);
    };
  }, [state]);

  return (
    <Layout>
      {isSuccessSurvey ? (
        <SuccessSurvey />
      ) : (
        <>
          <LedingApply />
          <AllianceMain />
          <AllianceBenefit />
          <div ref={allianceContactRef}>
            <AllianceContact
              shouldScrollToContact={state?.shouldScrollToContact}
              setIsSuccessSurvey={setIsSuccessSurvey}
            />
          </div>
        </>
      )}
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>몽글 제휴문의</title>;
