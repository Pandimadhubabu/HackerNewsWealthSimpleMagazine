import React from "react";
import { CopyrightWrapper } from "./FooterFragments";
import { CopyrightLinks } from "./Constants";
const Copyright = () => (
  <CopyrightWrapper>
    <p>
      <strong>
        By using this website, you accept our{" "}
        {CopyrightLinks.map((link, index) => (
          <a href={link.href}>{link.name}</a>
        ))}
        . Copyright 2019 Wealthsimple Technologies Inc.
      </strong>
    </p>
  </CopyrightWrapper>
);

export default Copyright;
