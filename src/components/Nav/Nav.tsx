import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import * as styles from './Nav.module.scss';

const Nav = () => {
  const [isClickHamburger, setIsClickHamburger] = useState(false);
  
  return (
    <nav className={styles.NavContainer}>
      <div
        className={`${styles.NavWrapper} ${isClickHamburger && styles.visible}`}
      >
        <div className={styles.LogoWrap}>
          <Link to="/">
            <StaticImage src="../../images/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className={styles.MenuWrap}>
          <ul className={styles.Menu}>
            <div className={`${styles.Item} ${true && styles.active}`}>
              <li>서비스 소개</li>
              <li>제휴 문의</li>
            </div>
            <li>
              <button className={styles.Button}>혜택받고 등록하기</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
