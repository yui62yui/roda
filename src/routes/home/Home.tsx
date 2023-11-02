import { ButtonBox } from "components/StyledButton";
import {
  BottomContainer,
  InnerContainer,
  PhotoContainer,
  TopContainer,
  Wrapper,
} from "./StyledHome";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Wrapper>
      <InnerContainer>
        <TopContainer>
          <h3>
            <span>당신의 꿈</span>을 <span>응원</span>합니다!
          </h3>
          {/* <p>WAKE UP YOUR M!ND</p> */}
        </TopContainer>
        <PhotoContainer
          href="https://map.naver.com/p/search/%EB%A1%9C%EB%8B%A4%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4/place/1536955974?placePath=?entry=pll&from=nx&fromNxList=true"
          title="로다스튜디오 네이버 플레이스"
          target="blank"
        >
          <span>
            RoDa Studio
            <br />
            <span>네이버 플레이스 바로가기</span>
          </span>
        </PhotoContainer>
        <BottomContainer>
          <h2>홍대입구 도보 6분거리, 연남동 녹음/촬영 스튜디오</h2>
          <h1>
            <span>R</span>o<span>D</span>a <span>S</span>t<span>u</span>d
            <span>i</span>o
          </h1>
          <Link to={"/about"}>
            <ButtonBox className="ButtonBox">
              <span>About</span>
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

export default Home;
