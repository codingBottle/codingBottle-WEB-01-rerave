/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import theme from "styles/theme";
import aboutBackGroundImg from "assets/images/about/about_bg.jpg";
import aboutImg1 from "assets/images/about/about_pic1.jpg";
import aboutImg2 from "assets/images/about/about_pic2.jpg";
import ProductInform from "components/text/ProductInform";

interface Props {
  hashtag: {
    text: string;
    style?: React.CSSProperties;
  };
  title: string;
  summary: string;
  summaryBr?: string;
}

function AboutBrand({
  hashtag,
  title,
  summary,
  summaryBr,
}: Props) {
  
  const hashFontEn = {
    fontFamily: theme.fontFamily.en,
  };

  return (
    <section css={wrapper}>
      <div css={contentWrapper}>
        <div css={imgWrapper}>
          <img src={aboutImg1} alt="aboutImg1" />
          <img src={aboutImg2} alt="aboutImg2" />
        </div>
        <div css={descWrapper}>
          <ProductInform 
            hashtag={{
              text: `${hashtag.text}`,
              style: hashFontEn,
            }}
            title={title}
            summary={summary}
            summaryBr={summaryBr}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutBrand;

const wrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12rem 0;
  background: url(${aboutBackGroundImg}) no-repeat center center;
  background-size: cover;
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