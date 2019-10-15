import styled from "styled-components";

export const Container = styled.footer.attrs({ className: "w-full" })`
  background: #222;
  margin: 120px 0 0;

  @media (min-width: 620px) {
    padding: 40px 0 60px;
  }

  @media (min-width: 1020px) {
    padding: 50px 0 100px;
  }

  @media (max-width: 619px) {
    margin-top: 0;
  }
`;

export const FooterBlock = styled.div.attrs({ className: "w-full my-auto" })`
  max-width: 1490px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 50px;

  @media (min-width: 620px) {
    max-width: 1600px;
    padding-left: 80px;
    padding-right: 80px;
  }

  @media (min-width: 1020px) {
    max-width: 1684px;
    padding-left: 122px;
    padding-right: 122px;
  }
`;

export const FooterContent = styled.div.attrs({
  className: "text-white my-0 mx-auto"
})`
  &::after {
    clear: both;
    content: "";
    display: table;
  }
  max-width: 1200px;
`;

export const FooterListWrapper = styled.div.attrs({ className: "" })`
  margin: 0 0 50px;
  @media (min-width: 620px) {
    float: left;
    width: 33%;
    ${props => props.social && `width: 100%;`}
  }

  @media (min-width: 1020px) {
    float: left;
    width: 25%;
  }
`;

export const NameLi = styled.li.attrs({ className: "font-hairline uppercase" })`
  font-family: FuturaBT-Heavy, sans-serif;
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 25px;
`;

export const Li = styled.li.attrs({ className: "font-light" })`
  font-size: 18px;
  font-family: FuturaBT-Book, sans-serif;
  margin-bottom: 10px;
  ${props =>
    props.icon &&
    `display: inline-block;
     margin: 0 10px 0 0;`}
`;

export const FooterLink = styled.a.attrs({
  className: "text-white opacity-100 no-underline"
})`
  transition: opacity 60ms linear;
  ${props =>
    props.inactive &&
    `cursor: pointer;
    opacity: .4;`}
`;
export const FooterIcon = styled.a.attrs({
  className: "block overflow-hidden"
})`
  background: url(${props => props.url}) no-repeat;
  height: 35px;
  text-indent: -9999em;
  width: 28px;
  ${props =>
    props.country &&
    `background-size: 41px 24px;
    height: 24px;
    width: 41px;`}
  ${props =>
    props.inactive &&
    `cursor: pointer;
     opacity: .4;`}
`;
export const FooterDivider = styled.div.attrs({ className: "hidden" })`
  @media (min-width: 620px) {
    display: block;
  }
  border: 1px solid #202020;
  height: 1px;
`;
export const FooterWSLinks = styled.div`
    font-size: 18px;
    margin: 40px auto 0;
    max-width: 1200px;
    @media (min-width: 620px)
        margin: 85px auto 0;
}
`;

export const SocialMediaIcon = styled.a.attrs({
  className: "no-underline text-center"
})`
  font-size: 30px;
  width: 30px;
  border-radius: 50%;
`;

export const WSTags = styled.a.attrs({
  className: "block text-white opacity-100 no-underline"
})`
  margin: 0 0 15px;
  position: relative;
  transition: opacity 60ms linear;
  @media (min-width: 620px) {
    display: inline;
    margin: 0 25px 0 0;
  }
`;

export const CopyrightWrapper = styled.div.attrs({
  className: "text-white opacity-25 mx-auto my-0"
})`
  font-size: 13px;
  line-height: 1.77;
  max-width: 1200px;
  padding: 10px 0;
`;
