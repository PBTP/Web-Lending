import React from "react";
import * as styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.FooterWrapper}>
      <div className={styles.FooterTitle}>Mongle</div>
      <div className={styles.FooterMarketingContent}>
        <button>업체 입점 문의</button>
        <button>마케팅/광고 제휴</button>
      </div>
      <div className={styles.FooterCorpContent}>
        <div className={styles.FooterCorpInfo}>
          <span className={styles.CEO}>대표이사</span>
          <span>사업자등록번호</span>
        </div>
        <div>
          <span>주소</span>
        </div>
        <div>
          <span>help@mongle.com</span>
        </div>
        <div>
          <div>몽글몽글은 통신판매중개자로서 통신판매의 당사자가 아니며</div>
          <div>상품 거래정보 및 거래 등에 대해 책임을 지지 않습니다.</div>
        </div>
      </div>
      <div className={styles.FooterTerms}>
        <span>이용약관</span>
        <span>전자금융거래 이용약관</span>
        <span>개인정보 처리방침</span>
      </div>
    </footer>
  );
};

export default Footer;
