import React from "react";
import Nav from "./Nav/Nav";
import * as styles from "./Layout.module.scss";
import Footer from "./Footer/Footer";
import { Link } from "gatsby";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.LayoutContainer}>
      <Nav />
      {children}
      <Footer />
      <Link
        className={styles.LayoutMobileApplyLink}
        to="/alliance"
        state={{ shouldScrollToContact: true }}
      >
        혜택받고 등록하기
      </Link>
    </div>
  );
};

export default Layout;
