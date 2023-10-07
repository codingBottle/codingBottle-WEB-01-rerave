/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import liftingMask from "assets/images/product/liftingMask.jpeg";
import Footer from "components/footer";
import IntroSection from "components/introSection";
import AboutProduct from "components/section/AboutProduct";
import AboutBrand from "components/section/AboutBrand";
import AboutTechnology from "components/section/AboutTechnology";

function App() {
  return (
    <>
      {/* <Nav /> */}
      <IntroSection />
      <main css={wrapper}>
        <AboutProduct
          hashtag={{
            text: "#불가사리 마스크 #재생 #회복"
          }}
          title="Rerave PENELLAGEN®Lifting Mask"
          koreanTitle="리라브 페넬라겐® 리프팅 마스크"
          summary="리라브가 제안 하는 트리플 락킹(Triple - Locking)"
          summaryBr="리프팅 에너지 마스크"
          imgSrc={liftingMask}
        />
      </main>
      <AboutBrand
        hashtag={{
          text: 'Brand Story'
        }}
        title="About Rerave"
        summary="리라브는 나를, 우리를 그리고 더 나아가 세상을"
        summaryBr="모두 건강하고 아름답게 하기 위한 고민에서 시작하였습니다."
      />
      <AboutTechnology />
      <Footer />
    </>
  );
}

export default App;

const wrapper = css`
  padding: 10rem 5rem;
`;
