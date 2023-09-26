/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

function ViewMore() {
  return (
    <a href="/" css={wrapper}>
      <span>View more</span>
      <hr css={hrCss} />
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

const hrCss = css`
  margin-top: 0.1rem;
  width: 6.5rem;
`;
