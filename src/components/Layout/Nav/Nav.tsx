import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "./Nav.module.scss";
import NavbarMenuLink from "../../common/NavbarMenuLink";

const Nav = () => {
  return (
    <nav className={styles.NavContainer}>
      <div className={styles.NavWrapper}>
        <div className={styles.LogoWrapper}>
          <Link to="/">
            <StaticImage src="../../../images/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className={styles.MenuWrapper}>
          <ul className={styles.Menu}>
            <div className={styles.Item}>
              <li>
                <NavbarMenuLink to="/" content="서비스 소개" />
              </li>
              <li>
                <NavbarMenuLink to="/alliance" content="제휴문의" />
              </li>
            </div>
            <li>
              <button className={styles.BenefitButton}>
                혜택받고 등록하기
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
