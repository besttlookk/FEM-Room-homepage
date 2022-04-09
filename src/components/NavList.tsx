import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

const NavListEl = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const NavList = () => {
  return (
    <NavListEl>
      <NavItem>home</NavItem>
      <NavItem>shop</NavItem>
      <NavItem>about</NavItem>
      <NavItem>contact</NavItem>
    </NavListEl>
  );
};

export default NavList;
