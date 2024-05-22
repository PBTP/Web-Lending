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
      await fetch(`${process.env.GATSBY_API_URL}/pre-registration-survey`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
      })
        .then((res) => {
          console.log(res);
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
