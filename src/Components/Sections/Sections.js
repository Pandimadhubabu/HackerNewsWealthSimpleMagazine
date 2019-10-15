import React, { useState } from "react";
import styled from "styled-components";
import { Stories } from "../Stories";

const Section = styled.section`
  margin: 0 auto;
  max-width: 1260px;
  padding: 0 20px;
  width: 100%;
  @media (min-width: 620px) {
    max-width: 1600px;
    padding-left: 80px;
    padding-right: 80px;
    padding: 0 40px;
  }
  @media (min-width: 1020px) {
    max-width: 1684px;
    padding-left: 122px;
    padding-right: 122px;
  }
`;

const Magazine = styled.section`
  margin: 50px 0 20px;
  position: relative;
  text-align: center;
  @media (min-width: 620px) {
    margin: 230px 0 60px;
  }
`;
const Logo = styled.img`
  height: 20px;
  margin: 0 0 5px;
  width: 138px;
  max-width: 100%;
  @media (min-width: 620px) {
    height: 28px;
    margin: 0 auto;
    width: 190px;
  }
`;
const H1 = styled.h1`
  font-family: FuturaBT-Heavy, sans-serif;
  font-size: 45px;
  font-weight: 100;
  color: #272c2f;
  line-height: 1.1;
  @media (min-width: 620px) {
    font-size: 52px;
    letter-spacing: -4px;
  }
  @media (min-width: 1020px) {
    font-size: 76px;
  }
`;

const Subtitle = styled.h2`
  font-family: FuturaBT-Heavy, sans-serif;
  font-size: 14px;
  font-weight: 100;
  letter-spacing: 2px;
  opacity: 0.4;
  text-transform: uppercase;
  line-height: 21px;
  margin: 15px 0 0;
`;

const Nav = styled.nav`
  display: none;
  width: 100%;
  @media (min-width: 620px) {
    display: block;
  }
`;

const Ul = styled.ul`
  justify-content: center;
  display: flex;
`;

const Li = styled.li`
  align-self: center;
  margin: 0 20px;
  position: relative;
  text-align: center;
`;

const Link = styled.a`
  color: #272c2f;
  opacity: 0.4;
  text-decoration: none;
  ${props => props.active && `opacity: 1;`}
`;

const SignupLink = styled.a`
  color: #ffb21a;
  display: block;
  margin: 20px 0 40px;
  text-decoration: none;
  @media (min-width: 620px) {
    margin: 110px 0 40px;
  }
`;

const Sections = () => {
  const [filter, setFilter] = useState();
  return (
    <Section>
      <Magazine>
        <span>
          <Logo src="images/header-logo.svg" alt="Wealthsimple" />
        </span>
        <H1>Magazine</H1>
        <Subtitle>Stories and Ideas from Wealthsimple</Subtitle>
        <SignupLink href="#"></SignupLink>
        <Nav>
          <Ul>
            <Li>
              <Link onClick={() => setFilter(null)} active={!filter}>
                All Article
              </Link>
            </Li>
            <Li>
              <Link
                active={filter === "even"}
                onClick={() => setFilter("even")}
              >
                Even Numbered Articles
              </Link>
            </Li>
            <Li>
              <Link active={filter === "odd"} onClick={() => setFilter("odd")}>
                Odd Numbered Articles
              </Link>
            </Li>
          </Ul>
        </Nav>
      </Magazine>
      <Stories filter={filter}></Stories>
    </Section>
  );
};

export default Sections;
