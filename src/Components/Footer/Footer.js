import React from "react";
import FooterWsLinks from "./FooterWsLinks";
import Copyright from "./Copyright";
import { FooterLinks, Icons } from "./Constants";
import {
  Container,
  FooterBlock,
  FooterContent,
  FooterLink,
  FooterListWrapper,
  NameLi,
  Li,
  FooterIcon,
  FooterDivider,
  SocialMediaIcon
} from "./FooterFragments";

const Footer = () => (
  <Container>
    <FooterBlock>
      <FooterContent>
        {FooterLinks.map(
          (item, index) =>
            !item.lowerFooter && (
              <FooterListWrapper key={index}>
                <ul className="text-left align-top">
                  <NameLi> {item.name} </NameLi>
                  {item.links.map((link, index) => (
                    <Li key={index}>
                      <FooterLink href={link.href}>{link.name}</FooterLink>
                    </Li>
                  ))}
                </ul>
              </FooterListWrapper>
            )
        )}
        {Icons.map(
          (item, index) =>
            !item.lowerFooter && (
              <FooterListWrapper key={index}>
                <ul className="text-left align-top">
                  <NameLi>{item.name}</NameLi>
                  {item.links.map((link, index) => (
                    <Li icon={true} key={index}>
                      <FooterIcon href={link.href} url={link.url} />
                    </Li>
                  ))}
                </ul>
              </FooterListWrapper>
            )
        )}
      </FooterContent>
    </FooterBlock>
    <FooterDivider />
    <FooterBlock>
      <FooterContent>
        {FooterLinks.map(
          (item, index) =>
            item.lowerFooter && (
              <FooterListWrapper key={index}>
                <ul className="text-left align-top">
                  <NameLi> {item.name} </NameLi>
                  {item.links.map((link, index) => (
                    <Li key={index}>
                      <FooterLink inactive={link.inactive} href={link.href}>
                        {link.name}
                      </FooterLink>
                    </Li>
                  ))}
                </ul>
              </FooterListWrapper>
            )
        )}
        {Icons.map(
          (item, index) =>
            item.lowerFooter && (
              <FooterListWrapper key={index}>
                <ul className="text-left align-top">
                  <NameLi>{item.name}</NameLi>
                  {item.links.map((link, index) => (
                    <Li icon={true} key={index}>
                      {item.isSocial ? (
                        <SocialMediaIcon
                          className={link.class}
                          href={link.href}
                        />
                      ) : (
                        <FooterIcon
                          country={item.country}
                          inactive={link.inactive}
                          href={link.href}
                          url={link.url}
                        />
                      )}
                    </Li>
                  ))}
                </ul>
              </FooterListWrapper>
            )
        )}
      </FooterContent>
      <FooterWsLinks />
    </FooterBlock>
    <Copyright />
  </Container>
);

export default Footer;
