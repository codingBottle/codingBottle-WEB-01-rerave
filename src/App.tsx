/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import liftingMask from "assets/images/product/liftingMask.jpeg";
import Footer from "components/footer";
import IntroSection from "components/introSection";
import AboutProduct from "components/section/AboutProduct";
function App() {
  return (
    <>
      {/* <Nav /> */}
      <IntroSection />
      <main css={wrapper}>
        <AboutProduct
          hashtag="#불가사리 마스크 #재생 #회복"
          title="Rerave PENELLAGEN®
Lifting Mask"
          koreanTitle="리라브 페넬라겐® 리프팅 마스크
"
          summary="리라브가 제안 하는 트리플 락킹(Triple - Locking)"
          summaryBr="리프팅 에너지 마스크"
          imgSrc={liftingMask}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;

const wrapper = css`
  padding: 10rem 5rem;
`;
