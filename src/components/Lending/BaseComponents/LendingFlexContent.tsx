import React, { ReactNode } from 'react';
import * as styles from './LendingFlexContent.module.scss';

interface ILendingFlexContentBaseProps {
  children: ReactNode;
}

interface HeaderProps extends ILendingFlexContentBaseProps {}
interface DescriptionProps extends ILendingFlexContentBaseProps {}
interface ImageProps extends ILendingFlexContentBaseProps {}

const LendingFlexContent = ({ children }: ILendingFlexContentBaseProps) => {
  return <div className={styles.LendingFlexContent}>{children}</div>;
};

const Header = ({ children }: HeaderProps) => {
  return <div className={styles.Header}>{children}</div>;
};

const Description = ({ children }: DescriptionProps) => {
  return <div className={styles.Description}>{children}</div>;
};

const Image = ({ children }: ImageProps) => {
  return <div className={styles.Image}>{children}</div>;
};

LendingFlexContent.Header = Header;
LendingFlexContent.Description = Description;
LendingFlexContent.Image = Image;

export default LendingFlexContent;
