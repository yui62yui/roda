import { ButtonBox } from "components/StyledButton";
import {
  InnerContainer,
  PhotoBox,
  PhotoContainer,
  SubContainer,
  VideoContainer,
  Wrapper,
} from "./StyledProducts";

const Products = () => {
  return (
    <Wrapper>
      <InnerContainer>
        <h2>
          RoDa와 함께 당신의 꿈을 실현해 보세요! <br />
          RoDa만의 최고의 가격, 최고의 퀄리티 서비스
        </h2>
        <PhotoContainer>
          <PhotoBox>사진 삽입</PhotoBox>
          <PhotoBox>사진 삽입</PhotoBox>
        </PhotoContainer>
      </InnerContainer>
      <InnerContainer>
        <h2>RoDa만의 특별한 보컬 녹음클래스</h2>
        <VideoContainer>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/XL0bxzM1OWA?si=mZmrIzjEcvcwv6az&amp;controls=0"
            title="원데이 보컬 클래스 영상"
            allowFullScreen
          ></iframe>
        </VideoContainer>
        <SubContainer>
          <h4>
            보컬 전공 전문 트레이너와 보컬 트레이닝은 물론,
            <br />
            전문 녹음실에서 직접 부른 노래를 녹음까지 가능한
            <br />
            RoDa만의 녹음 클래스가 궁금하다면?
          </h4>
          <a
            href="https://www.sssd.co.kr/m/class/detail/20594?cmd=app"
            title="솜씨당 바로가기"
            target="blank"
          >
            <ButtonBox className="ButtonBox">
              <img src="/image/vocal_icon.png" alt="솜씨당 아이콘" />
              <span>솜씨당에서 예약하기</span>
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
          </a>
        </SubContainer>
      </InnerContainer>
    </Wrapper>
  );
};

export default Products;
