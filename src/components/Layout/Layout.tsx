import React from "react";
import Nav from "./Nav/Nav";
import * as styles from "./Layout.module.scss";
import Footer from "./Footer/Footer";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.LayoutContainer}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
