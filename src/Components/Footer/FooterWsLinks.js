import React from "react";
import { FooterWSLinks, WSTags } from "./FooterFragments";
import { WSLinks } from "./Constants";

const FooterLinks = () => (
  <FooterWSLinks>
    {WSLinks.map((link, index) => (
      <WSTags key={index}>{link.name}</WSTags>
    ))}
  </FooterWSLinks>
);

export default FooterLinks;
