import { ButtonBox } from "components/StyledButton";
import {
  BottomContainer,
  InnerContainer,
  ListContainer,
  PhotoSlider,
  PhotoSliderContainer,
  Wrapper,
} from "./StyledAbout";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <Wrapper>
      <InnerContainer>
        <h2>최고급 장비로 녹음 / 믹싱 / 촬영을 한 번에!</h2>
        <PhotoSliderContainer>
          <PhotoSlider>사진 삽입</PhotoSlider>
        </PhotoSliderContainer>
        <ListContainer>
          <h4>
            노이만 TLM102 / 아폴로 트윈X / 아투리아 8pre <br /> 웜오디오
            프리엠프, 골든에이지 컴프/ RME UFX+ <br />
            맨리 VOXBOX / 맨리 CARDIOID 마이크 등 최고급 장비 보유 중!
          </h4>
        </ListContainer>
        <BottomContainer>
          <Link to={"/products"}>
            <ButtonBox className="ButtonBox">
              <span>Products</span>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width={"20px"}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                ></path>
              </svg>
            </ButtonBox>
          </Link>
        </BottomContainer>
      </InnerContainer>
    </Wrapper>
  );
};

export default About;
