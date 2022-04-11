import React, { useState } from "react";
import styled from "styled-components";
import NavList from "../components/NavList";
import media from "../styles/media";
import LogoIcon from "../images/logo.svg";
import HamburgerMenu from "../images/icon-hamburger.svg";
import CloseIcon from "../images/icon-close.svg";

const HeaderEl = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  transition: 0.7s;
`;

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: auto;
  height: var(--height-header);
  padding: 0 2rem;
  max-width: 144rem;

  .logo {
    margin-inline: auto;
  }

  .menu {
    cursor: pointer;
    ${media.tablet} {
      display: none;
    }
  }

  ${media.tablet} {
    justify-content: flex-start;
    padding: 0 3rem;

    .logo {
      margin: 0;
    }
  }

  ${media.laptop} {
    justify-content: flex-start;
    padding: 0 4rem;

    .logo {
      margin: 0;
    }
  }
`;

const Navigation = styled.div`
  display: none;

  ${media.tablet} {
    display: block;
    margin-left: 3rem;
  }

  ${media.laptop} {
    margin-left: 6rem;
  }
`;

const MobileNavigation = styled.div`
  position: absolute;
  inset: 0;
  align-items: center;
  background-color: white;
  padding: 0 2rem;
  transform: translateX(100%);
  transition: all 0.5s;
  display: none;

  .nav {
    margin-inline: auto;
  }

  .close-icon {
    cursor: pointer;
  }

  &.active {
    transform: translateX(0);
    display: flex;
  }

  ${media.tablet} {
    display: none;
  }
`;

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <HeaderEl>
      <HeaderWrapper>
        <HamburgerMenu
          className={isMenuActive ? "active menu" : "menu"}
          onClick={() => setIsMenuActive(true)}
        />
        <LogoIcon className="logo" />

        <MobileNavigation className={isMenuActive ? "active" : ""}>
          <CloseIcon
            onClick={() => setIsMenuActive(false)}
            className="close-icon"
          />
          <div className="nav">
            <NavList />
          </div>
        </MobileNavigation>

        <Navigation className={isMenuActive ? "active" : ""}>
          <NavList />
        </Navigation>
      </HeaderWrapper>
    </HeaderEl>
  );
};

export default Header;
