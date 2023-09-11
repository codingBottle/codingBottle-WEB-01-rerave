/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import theme from "styles/theme";

function Nav() {
  return (
    <nav>
      네브바
      <ul>
        <li css={navItem}>예시</li>
      </ul>
    </nav>
  );
}

export default Nav;

const navItem = css`
  color: ${theme.color.gray};
  font-size: 2rem;
`;
