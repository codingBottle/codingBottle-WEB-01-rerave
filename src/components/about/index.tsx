/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import theme from "styles/theme";
import backgroundImg from "assets/images/about/about_bg.jpg";
import aboutImg1 from "assets/images/about/about_pic1.jpg";
import aboutImg2 from "assets/images/about/about_pic2.jpg";
import ViewMore from "components/button/ViewMore";

function About() {
  return (
    <section css={wrapper}>
      <div css={contentWrapper}>
        <div css={imgWrapper}>
          <img src={aboutImg1} alt="aboutImg1" />
          <img src={aboutImg2} alt="aboutImg2" />
        </div>
        <div css={descWrapper}>
          <span css={subTitle}>Brand Story</span>
          <h1 css={title}>About Rerave</h1>
          <div css={detail}>
            <p>리라브는 나를, 우리를 그리고 더 나아가 세상을</p>
            <p>모두 건강하고 아름답게 하기 위한 고민에서 시작하였습니다.</p>
          </div>
          <ViewMore />
        </div>
      </div>
    </section>
  )
}

export default About;

const wrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12rem 0;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

const contentWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 96%;
  max-width: 115rem;
  min-width: 60rem;
  margin-left: auto;
`;

const imgWrapper = css`
  display: flex;
  flex-direction: row;
  width: 55%;
  overflow: hidden;
  img {
    width: 49%;
    &:nth-child(1) {
      margin-right: 0.9375rem;
    }
  }
`;

const descWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  text-align: center;
`;

const subTitle = css`
  margin-bottom: 1.25rem;
  font-size: 0.9375rem;
  line-height: 1.5rem;
  color: ${theme.color.gray};
`;

const title = css`
  margin-bottom: 1.5625rem;
  font-size: 3.75rem;
  line-height: 4.3125rem;
  font-weight: ${theme.fontWeight.normal};
`;

const detail = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.625rem;
  margin-bottom: 2.8125rem;
  font-size: 1rem;
  p {
    margin: 0;
    padding: 0;
  }
`;
