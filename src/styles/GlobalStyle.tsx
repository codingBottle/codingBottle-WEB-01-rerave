import { Global, Theme, css } from "@emotion/react";

function GlobalStyle() {
  return <Global styles={globalStyle} />;
}

export default GlobalStyle;

const globalStyle = (theme: Theme) => css`
  @import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Noto+Sans+KR:wght@200;300;400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Marcellus", serif;
  }

  html,
  body {
    background-color: ${theme.color.white};
    color: ${theme.color.black};
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
