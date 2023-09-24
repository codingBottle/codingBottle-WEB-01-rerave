/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import ProductInform from "components/text/ProductInform";

interface Props {
  hashtag: string;
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
  return (
    <section css={wrapper}>
      <ProductInform
        hashtag={hashtag}
        title={title}
        koreanTitle={koreanTitle}
        summary={summary}
        summaryBr={summaryBr}
      />
      <div css={imgWrapper}>
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
