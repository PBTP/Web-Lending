import axios from 'axios';
import { ApplyContactInfoReq } from './types';
import { requestApi } from './instance';

const allianceApi = () => {
  const applyContactInfo = async ({
    contactInfo,
    region,
    reservationPlatform,
    shouldInterview,
  }: ApplyContactInfoReq) => {
    const formatedPlatforms = reservationPlatform.join(',');

    try {
      const res = await requestApi.post(`pre-registration-survey`, {
        name: contactInfo.name,
        email: contactInfo.email,
        phoneNumber: contactInfo.phone,
        businessName: contactInfo.store,
        region: region,
        reservationPlatform: formatedPlatforms,
        snsContact: contactInfo.snsLink,
        phoneInterview: shouldInterview,
      });

      if (res.status >= 400) {
        throw new Error(res.statusText);
      }

      return res; // 성공 시 응답 반환
    } catch (e) {
      console.log(e);
      alert('등록이 실패하였습니다. 작성하신 정보를 확인해주세요.');
      throw e;
    }
  };

  return { applyContactInfo };
};

export default allianceApi;
