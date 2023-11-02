import {
  InnerContainer,
  ListContainer,
  PhotoSlider,
  PhotoSliderContainer,
  Wrapper,
} from "./StyledAbout";

const About = () => {
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
      </InnerContainer>
    </Wrapper>
  );
};

export default About;
