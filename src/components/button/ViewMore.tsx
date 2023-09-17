/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import theme from "styles/theme";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  color: ${theme.color.white};
  margin-top: 3rem;
  cursor: pointer;
`;

const hrCss = css`
  margin-top: 0.1rem;
  width: 12%;
  border: 0.3px solid ${theme.color.white};
`;
