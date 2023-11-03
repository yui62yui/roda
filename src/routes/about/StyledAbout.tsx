import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 80px;
  background: url(/image/장비3.jpg) no-repeat center/cover;

  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 200vh;
    background-color: rgba(0, 0, 0, 0.75);
  }

  @media screen and (max-width: 500px) {
    min-width: 320px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6rem 0;
  z-index: 10;

  & > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    letter-spacing: -0.05rem;
    color: #fff;
    @media screen and (max-width: 500px) {
      font-size: 2rem;
    }
  }
`;

export const PhotoSliderContainer = styled.div`
  width: 80rem;
  height: 45rem;
  margin: 3rem 0;
  @keyframes startAnimation {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }

  animation: startAnimation 1s ease-in;

  @media screen and (max-width: 500px) {
    width: 30rem;
    height: 20rem;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 10rem;
  border: 2px solid #fff;
  border-radius: 2rem;

  @media screen and (max-width: 500px) {
    width: 35rem;
    height: 10rem;
  }

  & > h4 {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: -0.05rem;
    line-height: 1.5;

    @media screen and (max-width: 500px) {
      font-size: 1.2rem;
    }
  }
  @keyframes startAnimation {
    0% {
      opacity: 0%;
    }
    50% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  animation: startAnimation 2s ease-in;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #fff;

  & .ButtonBox {
    width: 140px;

    @media screen and (max-width: 500px) {
      width: 130px;
    }
  }

  @keyframes startAnimation {
    0% {
      opacity: 0%;
    }
    50% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  animation: startAnimation 3s ease-in;
`;
