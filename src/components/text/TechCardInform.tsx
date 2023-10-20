/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import theme from "styles/theme";
import { techArr } from "constants/technologies";

function TechnologyInform() {
  return (
    <div css={wrapper}>
      {techArr.map((el) => (
        <div css={cardWrapper}>
          <img src={el.img} alt={el.title} />
          <div css={textWrapper}>
            <h4 css={title}>{el.title}</h4>
            <p css={desc}>{el.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechnologyInform;

const wrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const cardWrapper = css`
  position: relative;
  width: calc(33.33% - .625rem);
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: grayscale(1) opacity(75%);
  transition: all .4s;

  img {
    width: 100%;
    transition: all .4s;
  }

  &:hover {
    filter: grayscale(0) opacity(100%);
    img {
      border-radius: 2.5rem;
    }
  }
`;

const textWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2.625rem 2rem;
  color: ${theme.color.white};
`;

const title = css`
  font-size: 2.625rem;
  font-weight: ${theme.fontWeight.light};
`;

const desc = css`
  font-size: 1rem;
  line-height: 1.625rem;
  letter-spacing: -0.0625rem;
  word-break: keep-all;
`;
