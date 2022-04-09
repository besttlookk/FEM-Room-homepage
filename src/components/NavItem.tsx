import Link from "next/link";
import React from "react";
import styled from "styled-components";
import media from "../styles/media";

const ListEl = styled.li`
  a {
    color: var(--col-gray-dark);
    font-weight: 600;
    font-size: 1.4rem;
    transition: all 0.3s;

    ${media.tablet} {
      color: white;
    }

    &:hover {
      color: black;
    }
  }
`;

const NavItem = ({ children }: { children: string }) => {
  return (
    <ListEl>
      <Link href="/">{children}</Link>
    </ListEl>
  );
};

export default NavItem;
