/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

function ViewMore() {
  return (
    <a href="/" css={wrapper}>
      <span css={viewMoreBtn}>View more</span>
    </a>
  );
}

export default ViewMore;

const wrapper = css`
  all: unset;
  font-size: 1.25rem;
  margin-top: 3rem;
  cursor: pointer;
`;
const viewMoreBtn = css`
  display: inline-block;
  border-bottom: 0.0625rem solid;
  padding-bottom: 0.2rem;
`;