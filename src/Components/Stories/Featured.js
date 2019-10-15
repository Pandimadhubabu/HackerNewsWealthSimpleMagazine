import React from "react";
import styled from "styled-components";

const Featured = styled.div`
  margin: 0 -20px;
  position: relative;
  width: calc(100% + 40px);
  @media (min-width: 620px) {
    margin: 0;
    width: 100%;
  }
`;

const Anchor = styled.a.attrs({ className: "no-underline" })`
  color: inherit;
`;

const PostExcerpt = styled.div`
  background: hsla(0, 0%, 100%, 0.85);
  margin: -5px 0 0;
  background: #fff;
  clear: both;
  line-height: 28px;
  padding: 30px 30px 15px;
  @media (min-width: 620px) {
    bottom: 10px;
    margin: 0;
    position: absolute;
    right: 0;
    width: 580px;
  }
`;

const PostCategory = styled.span`
  font-family: FuturaBT-Heavy, sans-serif;
  font-size: 14px;
  font-weight: 100;
  letter-spacing: 2px;
  opacity: 0.4;
  text-transform: uppercase;
`;

const Title = styled.h3`
  font-family: FuturaBT-Heavy, sans-serif;
  font-size: inherit;
  font-weight: 100;
  font-size: 24px;
  letter-spacing: -0.03em;
  line-height: 32px;
  margin: 10px 0 20px;
`;

const Image = styled.img`
  margin: 0 auto;
`;

const FeaturedPost = ({ feature }) => (
  <Featured>
    <Anchor href={feature.url}>
      <Image
        src={feature.image}
        alt={(feature && feature.title) || "Loading featured posts"}
      />
      <PostExcerpt>
        <PostCategory>Money Diaries</PostCategory>
        <Title>{feature.title}</Title>
      </PostExcerpt>
    </Anchor>
  </Featured>
);

export default FeaturedPost;
