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
      await requestApi
        .post(`pre-registration-survey`, {
          name: contactInfo.name,
          email: contactInfo.email,
          phoneNumber: contactInfo.phone,
          businessName: contactInfo.store,
          region: region,
          reservationPlatform: formatedPlatforms,
          snsContact: contactInfo.snsLink,
          phoneInterview: shouldInterview,
        })
        .then((res) => {
          if (res.status >= 400) throw Error(res.statusText);
          alert('등록이 완료되었습니다.');
        })
        .catch((e) => {
          alert('등록이 실패하였습니다. 작성하신 정보를 확인해주세요.');
          throw Error(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return { applyContactInfo };
};

export default allianceApi;
