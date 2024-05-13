import { Link } from 'gatsby';
import React from 'react';

type NavbarMenuLinkProps = {
  to: string;
  content: string;
};

const NavbarMenuLink = ({ to, content }: NavbarMenuLinkProps) => {
  return (
    <Link
      to={to}
      getProps={({ isCurrent }) => {
        return {
          style: {
            color: isCurrent ? '#688EDC' : '#000',
            fontWeight: isCurrent ? 800 : 400,
          },
        };
      }}
    >
      {content}
    </Link>
  );
};

export default NavbarMenuLink;
