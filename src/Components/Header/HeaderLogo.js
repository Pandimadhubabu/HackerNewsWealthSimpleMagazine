import React from "react";
import styled from "styled-components";

const Image = styled.img`
  @media (min-width: 620px) {
    width: 166px;
  }
  @media (min-width: 1020px) {
    width: 200px;
  }
  @media (max-width: 619px) {
    height: 40px;
  }
`;
const HeaderLogo = () => (
  <>
    <a href="/en-ca/" className="flex-grow-10">
      <picture>
        <source
          className="block"
          media="(min-width: 600px)"
          srcSet="/images/header-logo.svg"
        />
        <Image
          className="block"
          src="/images/header-logo-small.svg"
          alt="IfItDoesntMatchAnyMedia"
        />
      </picture>
    </a>
  </>
);
export default HeaderLogo;
