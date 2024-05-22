import React from 'react';
import Nav from './Nav/Nav';
import * as styles from './Layout.module.scss';
import Footer from './Footer/Footer';
import { Link } from 'gatsby';
import ApplyLink from '../common/ApplyLink';
type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.LayoutContainer}>
      <Nav />
      {children}
      <Footer />
      <ApplyLink className={styles.LayoutMobileApplyLink} />
    </div>
  );
};

export default Layout;
