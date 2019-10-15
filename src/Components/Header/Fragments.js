import styled from "styled-components";

export const HeaderNavLink = styled.a.attrs({
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
export const ToggleMenu = styled.nav`
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
`;

export const ToggleClose = styled.div`
  background: url(/assets/magazine/images/modules/cross-white-d52a75d….svg)
    no-repeat;
  display: block;
  height: 22px;
  position: absolute;
  right: 25px;
  top: 25px;
  width: 22px;
  cursor: pointer;
  margin: auto;
`;
export const ToggleMenuItems = styled.div`
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

export const ToggleMenuMain = styled.div`
  margin: 0 0 60px;
`;

export const ToggleButton = styled.a.attrs({
  className: "items-center flex relative cursor-pointer"
})`
  background-color: #fab131;
  border-radius: 50%;
  height: 32px;
  width: 32px;
`;
export const ToggleButtonLines = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;
export const ToggleButtonLine = styled.div`
  margin-bottom: 2px;
  width: 38%;
  height: 1px;
  background-color: #fff;
  margin: 0 auto 4px;
`;
export const ToggleNavLink = styled.a`
  font-family: FuturaBT-Heavy, sans-serif;
  font-size: 14px;
  font-weight: 100;
  display: block;
  letter-spacing: 0.05em;
`;
export const IconUI = styled.ui`
  margin-top: 20px;
`;
export const IconLi = styled.li`
  margin: 0 10px;
`;
export const Icon = styled.a.attrs({
  className: "block overflow-hidden uppercase no-underline text-white"
})`
  background: ${props => props.url} no-repeat;
  line-height: 40px;
  height: 35px;
  text-indent: -9999em;
  width: 28px;
`;
