/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import theme from "styles/theme";

function AboutTechnology() {
  return (
    <section css={wrapper}>
      <div css={contentWrapper}>
        <h3>Rerave Technology</h3>
        <p>
          리라브는 나를, 우리를 그리고 더 나아가 세상을 <br />
          모두 건강하고 아름답게 하기 위한 고민에서 시작하였습니다.
        </p>
      </div>
    </section>
  )
}

export default AboutTechnology;

const wrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 11.25rem 0;
  overflow: hidden;
`;

const contentWrapper = css`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 93%;
  max-width: 110rem;
  min-width: 60rem;
  margin: 0 auto;
`;