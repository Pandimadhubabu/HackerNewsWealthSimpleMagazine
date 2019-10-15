import React from "react";
import Media from "react-media";
import styled from "styled-components";
import ToggleNav from "./ToggleNav";
import { HeaderLinks } from "./Constants";

const HeaderNavLink = styled.a.attrs({
  className: `no-underline`
})`
  margin-left: 20px;
  color: ${props =>
    props.active ? "#121212" : props.isButton ? "#fff" : "hsla(0,0%,7%,.5)"};
  font-size: 16px;
  @media (min-width: 1020px) {
    font-size: 18px;
  }
  ${props =>
    props.isButton &&
    `
        font-family: FuturaBT-Book,sans-serif
        font-weight: 300;
        background: #ffb21a;
        border-radius: 52px;
        padding: 16px 20px 15px;
        cursor : pointer;
        transition: background 80ms linear, opacity 1s linear;
        white-space: nowrap`}
`;

const Nav = () => (
  <nav className="lg:block md:block sm:hidden">
    <ul className="flex justify-end">
      {HeaderLinks.map(
        (link, index) =>
          !link.mobileOnly && (
            <li key={index}>
              <HeaderNavLink
                active={link.active}
                href={link.href}
                isButton={link.isButton}
              >
                {link.name}
              </HeaderNavLink>
            </li>
          )
      )}
    </ul>
  </nav>
);

const HeaderNav = () => (
  <Media
    queries={{
      small: "(max-width: 599px)",
      medium: "(min-width: 600px) and (max-width: 1199px)",
      large: "(min-width: 1200px)"
    }}
  >
    {matches => (
      <>
        {matches.small && <ToggleNav />}
        {matches.medium && <Nav />}
        {matches.large && <Nav />}
      </>
    )}
  </Media>
);

export default HeaderNav;
