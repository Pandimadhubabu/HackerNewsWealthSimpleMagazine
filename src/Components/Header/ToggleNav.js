import React, { useState } from "react";
import styled from "styled-components";
import { HeaderLinks, Icons } from "./Constants";

const ToggleMenu = styled.nav`
  bottom: 0;
  height: 100vh;
  right: -100%;
  top: 0;
  width: 100%;
  z-index: 11;
  color: #fff;
  transition: all 0.5s ease;
  position: fixed;
  background: #fab131;
  right: 0;
`;

const ToggleClose = styled.div`
  background: url(${props => props.url}) no-repeat;
  display: block;
  height: 22px;
  position: absolute;
  right: 25px;
  top: 25px;
  width: 22px;
  cursor: pointer;
  margin: auto;
`;
const ToggleMenuItems = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-family: FuturaBT-Book, sans-serif;
  font-weight: 300;
  font-size: 14px;
  width: 100%;
  letter-spacing: 3px;
  text-align: center;
`;

const ToggleMenuMain = styled.div`
  margin: 0 0 60px;
`;

const ToggleButton = styled.a.attrs({
  className: "items-center flex relative cursor-pointer"
})`
  background-color: #fab131;
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;
const ToggleButtonLines = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;
const ToggleButtonLine = styled.div`
  margin-bottom: 2px;
  width: 38%;
  height: 2px;
  background-color: #fff;
  margin: 0 auto 4px;
`;
const ToggleNavLink = styled.a`
  font-family: FuturaBT-Heavy, sans-serif;
  font-size: 14px;
  font-weight: 100;
  display: block;
  line-height: 40px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
`;
const IconLi = styled.li`
  margin: 0 10px;
  display: inline-block;
`;
const Icon = styled.a.attrs({
  className: "block overflow-hidden uppercase no-underline text-white"
})`
  background: url(${props => props.url}) no-repeat;
  line-height: 40px;
  height: 35px;
  text-indent: -9999em;
  width: 28px;
`;

const ToggleNav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle && (
        <ToggleMenu>
          <ToggleClose
            url={"/images/cross.svg"}
            onClick={() => setToggle(!toggle)}
          />
          <ToggleMenuItems>
            <ToggleMenuMain>
              {HeaderLinks.map(
                (link, index) =>
                  link.primary && (
                    <ToggleNavLink key={index} href={link.href}>
                      {link.name}
                    </ToggleNavLink>
                  )
              )}
            </ToggleMenuMain>
            <div>
              {HeaderLinks.map(
                (link, index) =>
                  !link.primary && (
                    <ToggleNavLink key={index} href={link.href}>
                      {link.name}
                    </ToggleNavLink>
                  )
              )}
              <ul className="mt-4">
                {Icons.map((icon, index) => (
                  <IconLi key={index}>
                    <Icon href={icon.href} title={icon.text} url={icon.url}>
                      {icon.text}
                    </Icon>
                  </IconLi>
                ))}
              </ul>
            </div>
          </ToggleMenuItems>
        </ToggleMenu>
      )}
      <ToggleButton onClick={() => setToggle(!toggle)}>
        <ToggleButtonLines>
          <ToggleButtonLine />
          <ToggleButtonLine />
          <ToggleButtonLine />
        </ToggleButtonLines>
      </ToggleButton>
    </>
  );
};
export default ToggleNav;
