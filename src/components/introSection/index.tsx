/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import waveImg from "assets/images/topBannerWave.jpeg";
import ViewMore from "components/button/ViewMore";
import theme from "styles/theme";

function IntroSection() {
  return (
    <div css={wrapper}>
      <img src={waveImg} alt="wave_img" css={imgWrapper} />
      <div css={contentWrapper}>
        <h1 css={contentTitle}>
          REVIVE YOUR YOUTH <br />
          AND BEAUTIFUL MOMENT
        </h1>
        <span css={contentSummary}>
          푸른 바다와 깊이 있는 연구가 만나 만드는 경이로운 가치
        </span>
        <div css={viewMoreWrapper}>
          <ViewMore />
        </div>
      </div>
    </div>
  );
}

export default IntroSection;

const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const imgWrapper = css`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const contentWrapper = css`
  position: absolute;
  text-align: center;
  opacity: 2;
  color: ${theme.color.white};
`;

const contentTitle = css`
  margin-bottom: 1rem;
  letter-spacing: -0.02rem;
  font-size: 4rem;
  line-height: 5rem;
`;

const contentSummary = css`
  margin-bottom: 2.5rem;
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: -0.6px;
`;

const viewMoreWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
