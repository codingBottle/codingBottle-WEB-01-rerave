/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import ViewMore from "components/button/ViewMore";

interface Props {
  hashtag: string;
  title: string;
  koreanTitle: string;
  summary: string;
  summaryBr?: string;
}

function ProductInform({
  hashtag,
  title,
  koreanTitle,
  summary,
  summaryBr,
}: Props) {
  return (
    <div css={wrapper}>
      <span css={hashtagContent}>{hashtag}</span>
      <span css={titleContent}>{title}</span>
      <span css={koreanTitleContent}>{koreanTitle}</span>
      <p css={summaryContent}>
        {summary} <br /> {summaryBr}
      </p>
      <ViewMore />
    </div>
  );
}

export default ProductInform;

const wrapper = css`
  display: flex;
  flex-direction: column;
`;

const hashtagContent = css`
  margin-bottom: 1.25rem;
  font-size: 0.93rem;
  line-height: 1.5rem;
  color: #999;
  font-family: "Noto Sans KR", sans-serif;
`;

const titleContent = css`
  margin-bottom: 1.5rem;
  font-size: 3.75rem;
  line-height: 4.3rem;
  letter-spacing: -0.02em;
`;

const koreanTitleContent = css`
  padding-top: 1.25rem;
  font-size: 1.75rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  margin-bottom: 3rem;
  font-family: "Noto Sans KR", sans-serif;
`;

const summaryContent = css`
  font-size: 1rem;
  line-height: 1.6rem;
  letter-spacing: -0.04rem;
  font-family: "Noto Sans KR", sans-serif;
`;
