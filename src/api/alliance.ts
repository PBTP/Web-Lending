import { ApplyContactInfoReq } from './types';

const allianceApi = () => {
  const applyContactInfo = async ({
    contactInfo,
    region,
    reservationPlatform,
    shouldInterview,
  }: ApplyContactInfoReq) => {
    const formatedPlatforms = reservationPlatform.join(',');

    try {
      await fetch('https://api.mgmg.life/pre-registration-survey', {
        method: 'POST',
        body: JSON.stringify({
          name: contactInfo.name,
          email: contactInfo.email,
          phoneNumber: contactInfo.phone,
          businessName: contactInfo.store,
          region: region,
          reservationPlatform: formatedPlatforms,
          snsContact: contactInfo.snsLink,
          phoneInterview: shouldInterview,
        }),
        mode: 'no-cors',
      })
        .then(() => {
          alert('등록이 완료되었습니다.');
        })
        .catch((e) => {
          throw Error(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return { applyContactInfo };
};

export default allianceApi;
