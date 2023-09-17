/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import theme from "styles/theme";
import logo from "assets/images/footer/ft_logo.svg";

function Footer() {
  return (
    <footer css={wrapper}>
      <div css={contents}>
        <h1>
          <img src={logo} alt="rerave your youth and beautiful moment" />
        </h1>
        <div css={footerInfo}>
          {/* sitemap */}
          <div css={footerInfoBox}>
            <span>SITEMAP</span>
            <ul css={siteMap}>
              <li>PRODUCT</li>
              <li>PENELLAGEN®</li>
              <li>CLINICALLY TESTED</li>
              <li>BRAND STORY</li>
            </ul>
          </div>
          {/* info */}
          <div css={footerInfoBox}>
            <span>INFO</span>
            <ul>
              <li>대표이사: 양승찬</li>
              <li>Copyright © 2022 rerave. All Rights Reserved.</li>
              <li>통신판매업신고 : 제2021-서울구로-2322호</li>
              <li>(주) 스타스테크 서울특별시 구로구 디지털로</li>
              <li>30길 28 마리오타워 1203호 스타스테크</li>
              <li>FAX : +82-70-4334-8255</li>
            </ul>
          </div>
          {/* cs center */}
          <div css={footerInfoBox}>
            <span>CS CENTER</span>
            <ul>
              <li>고객상담센터 1544-9166</li>
              <li>평일 : 10:00~17:00</li>
              <li>점심 : 12:00~13:00</li>
            </ul>
          </div>
        </div>
        <div css={copyright}>Copyright © 2022 rerave. All Rights Reserved.</div>
      </div>
    </footer>
  )
}

export default Footer;

const wrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 16.5rem;
  padding: 5.625rem 0 2.5rem 0;
  background-color: ${theme.color.white};
`;
const contents = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 100%;
  max-width: 110rem;
  min-width: 60rem;
  margin: 0 3.125rem 0 3.125rem;
`;
const footerInfo = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const footerInfoBox = css`
  display: flex;
  flex-direction: column;
  margin-left: 6.25rem;
  font-size: 0.75rem;
  span {
    margin-bottom: 0.5rem;
  }
  ul {
    li {
      line-height: 1.125rem;
    }
  }
`;
const siteMap = css`
  li {
    cursor: pointer;
  }
`;
const copyright = css`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 0.75rem;
  color: ${theme.color.gray};
`;