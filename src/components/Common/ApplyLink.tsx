import { Link } from 'gatsby';
import React from 'react';

type ApplyLinkProps = {
  className?: string;
};

const ApplyLink = ({ className }: ApplyLinkProps) => {
  return (
    <Link className={className} to="/alliance" replace={true} state={{ shouldScrollToContact: true }}>
      혜택받고 등록하기
    </Link>
  );
};

export default ApplyLink;
