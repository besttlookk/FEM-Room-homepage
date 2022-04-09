import React from "react";
import styled from "styled-components";
import { Header } from "../layouts";
import GlobalStyle from "./GlobalStyles";

const Main = styled.main`
  max-width: 1440px;
  margin-inline: auto;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
