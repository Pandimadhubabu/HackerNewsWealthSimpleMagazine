import styled from "styled-components";

export const LoadMoreDiv = styled.div`
  background: linear-gradient(hsla(0, 0%, 100%, 0), #f9f8f6);
  height: 390px;
  margin-top: -370px;
  pointer-events: none;
  position: relative;
  text-align: center;
  z-index: 2;
`;

export const Button = styled.div`
  bottom: 0;
  left: 50%;
  margin-left: -90px;
  pointer-events: auto;
  position: absolute;
  width: 180px;
  font-family: FuturaBT-Book, sans-serif;
  font-size: 18px;
  font-weight: 300;
  background: #ffb21a;
  border-radius: 52px;
  color: #fff;
  padding: 16px 20px 15px;
  text-decoration: none;
  transition: background 80ms linear, opacity 1s linear;
  white-space: nowrap;
`;

export const UL = styled.ul`
  position: relative;
  margin: 40px auto 0;
  width: 100%;
`;

export const LI = styled.li`
  background: #f2efeb;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
  @media (min-width: 620px) {
    width: calc(50% - 10px);
    margin-left: 10px;
  }
  float: left;
  &:nth-child(odd) {
    clear: both;
    display: table;
  }
`;

export const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`;

export const ArticleContainer = styled.div`
  display: block;
  height: 0;
  overflow: hidden;
  padding-bottom: 60%;
  position: relative;
  width: 100%;
  background-color: white;
`;

export const ArticleImage = styled.img`
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  float: left;
  width: 100%;
`;

export const PostExcerpt = styled.div`
  background: #fff;
  clear: both;
  line-height: 28px;
  padding: 30px 30px 15px;
`;

export const PostExcerptTitle = styled.h3`
  font-family: FuturaBT-Heavy, sans-serif;
  font-size: inherit;
  font-weight: 100;
  font-size: 24px;
  letter-spacing: -0.03em;
  line-height: 32px;
  margin: 10px 0 20px;
`;

export const PostCategory = styled.span`
  font-family: FuturaBT-Heavy, sans-serif;
  font-size: 14px;
  font-weight: 100;
  letter-spacing: 2px;
  opacity: 0.4;
  text-transform: uppercase;
`;
