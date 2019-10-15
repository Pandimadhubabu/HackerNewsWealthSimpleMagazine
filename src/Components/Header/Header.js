import React from "react";
import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

const Container = styled.header.attrs({
  className: "fixed top-0 bg-white block"
})`
  transform: translate(0);
  transition: transform 0.24s ease-in-out;
  width: 100%;
  z-index: 10;

  @media (min-width: 620px) {
    left: 0;
    padding: 30px 0;
  }

  @media (max-width: 620px) {
    padding: 16px 0;
  }
`;

const HeaderDiv = styled.div.attrs({ className: "flex items-center" })`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media (min-width: 620px) {
    max-width: 1600px;
    padding-left: 80px;
    padding-right: 80px;
  }

  @media (max-width: 620px) {
    padding: 0 25px;
  }

  @media (min-width: 1020px) {
    max-width: 1684px;
    padding-left: 122px;
    padding-right: 122px;
  }
`;

const Header = () => (
  <Container>
    <HeaderDiv>
      <HeaderLogo />
      <HeaderNav />
    </HeaderDiv>
  </Container>
);

export default Header;
