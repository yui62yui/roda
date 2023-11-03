import { ButtonBox } from "components/StyledButton";
import { useState, useEffect } from "react";
import {
  Arrow,
  InnerContainer,
  ModalContainer,
  ModalContent,
  PhotoBox,
  PhotoContainer,
  SubContainer,
  VideoContainer,
  Wrapper,
} from "./StyledProducts";
import { Link } from "react-router-dom";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgNum, setImgNum] = useState(0);

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  const setImageNumberHandler = (imageNumber: number) => {
    setImgNum(imageNumber);
  };

  const modalHandler = (setState: boolean) => {
    setIsModalOpen(setState);
  };

  return (
    <Wrapper>
      {isModalOpen ? (
        <ModalContainer>
          {imgNum === 2 ? (
            <Arrow
              onClick={() => {
                setImageNumberHandler(1);
              }}
            >
              <svg
                className="left"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                ></path>
              </svg>
            </Arrow>
          ) : (
            <></>
          )}
          <div
            onClick={() => {
              modalHandler(false);
            }}
          >
            <ModalContent>
              <img src={`/image/price${imgNum}.jpg`} className="hidden" />
            </ModalContent>
            <button
              onClick={() => {
                modalHandler(false);
              }}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
              </svg>
            </button>
          </div>
          {imgNum === 1 ? (
            <Arrow
              onClick={() => {
                setImageNumberHandler(2);
              }}
            >
              <svg
                className="right"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                ></path>
              </svg>
            </Arrow>
          ) : (
            <></>
          )}
        </ModalContainer>
      ) : (
        <></>
      )}
      <InnerContainer>
        <h2>
          RoDa와 함께 당신의 꿈을 실현해 보세요! <br />
          RoDa만의 최고의 가격, 최고의 퀄리티 서비스
        </h2>
        <PhotoContainer>
          <PhotoBox
            onClick={() => {
              setImageNumberHandler(1);
              modalHandler(true);
            }}
          >
            <img src="/image/price1.jpg" alt="가격표1" />
          </PhotoBox>
          <PhotoBox
            onClick={() => {
              setImageNumberHandler(2);
              modalHandler(true);
            }}
          >
            <img src="/image/price2.jpg" alt="가격표2" />
          </PhotoBox>
        </PhotoContainer>
      </InnerContainer>
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M14.77 4.21a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 011.08-1.04L10 8.168l3.71-3.938a.75.75 0 011.06-.02zm0 6a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 111.08-1.04L10 14.168l3.71-3.938a.75.75 0 011.06-.02z"
        ></path>
      </svg>
      <InnerContainer>
        <h2>RoDa만의 특별한 보컬 녹음클래스</h2>
        <VideoContainer>
          <iframe
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
        <Link to={"/contact"}>
          <ButtonBox className="ButtonBox">
            <span>Contact</span>
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
      </InnerContainer>
    </Wrapper>
  );
};

export default Products;
