/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import ProductInform from "components/text/ProductInform";
import theme from "styles/theme";

interface Props {
  hashtag: {
    text: string;
    style?: React.CSSProperties;
  };
  title: string;
  koreanTitle: string;
  summary: string;
  summaryBr?: string;
  imgSrc: string;
}

function AboutProduct({
  hashtag,
  title,
  koreanTitle,
  summary,
  summaryBr,
  imgSrc,
}: Props) {
  
  const hashFontKor = {
    fontFamily: theme.fontFamily.kor,
  };

  return (
    <section css={wrapper}>
      <ProductInform
        hashtag={{
          text: `${hashtag.text}`,
          style: hashFontKor,
        }}
        title={title}
        koreanTitle={koreanTitle}
        summary={summary}
        summaryBr={summaryBr}
      />
      <div css={imgWrapper} data-aos="fade-up">
        <img src={imgSrc} alt="상품이미지" css={imgInWrapper} />
      </div>
    </section>
  );
}

export default AboutProduct;

const wrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

const imgWrapper = css`
  width: 100%;
`;

const imgInWrapper = css`
  width: 100%;
`;
