export type ContactInfoType = {
  name: '';
  email: '';
  phone: '';
  store: '';
  snsLink: '';
};

export type ApplyContactInfoReq = {
  contactInfo: ContactInfoType;
  region: string;
  reservationPlatform: string[];
  shouldInterview: boolean;
};
