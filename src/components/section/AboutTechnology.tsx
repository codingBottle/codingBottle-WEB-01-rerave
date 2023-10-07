/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import theme from "styles/theme";

function AboutTechnology() {
  return (
    <section css={wrapper}>
      <div css={contentWrapper}>
        <div css={titleWrapper}>
          <h3 css={title}>Rerave Technology</h3>
          <p css={desc}>
            리라브는 나를, 우리를 그리고 더 나아가 세상을 <br />
            모두 건강하고 아름답게 하기 위한 고민에서 시작하였습니다.
          </p>
        </div>
        <div css={cardWrapper}>
          <div>Card Compo1</div>
          <div>Card Compo2</div>
          <div>Card Compo3</div>
        </div>
      </div>
    </section>
  );
}

export default AboutTechnology;

const wrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11.25rem 0;
  overflow: hidden;
`;

const contentWrapper = css`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5.625rem;
  width: 93%;
  max-width: 110rem;
  min-width: 60rem;
  margin: 0 auto;
`;

const titleWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5625rem;
`;

const title = css`
  margin: 0%;
  font-size: 3.75rem;
  font-weight: ${theme.fontWeight.light};
  line-height: 4.3125rem;
  letter-spacing: -0.02em;
`;

const desc = css`
  font-size: 1rem;
  font-family: ${theme.fontFamily.kor};
  line-height: 1.625rem;
  letter-spacing: -0.0625rem;
  word-break: keep-all;
`;

const cardWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    border: 1px solid green;
    position: relative;
    width: calc(33.33% - 10px);
  }
`;
