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
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 60px 0;
  z-index: 10;

  & > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    letter-spacing: -0.05rem;
    color: #fff;
  }
`;

export const PhotoSliderContainer = styled.div`
  width: 800px;
  height: 450px;
  margin: 30px 0;
  background-color: #999;
  @keyframes startAnimation {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }

  animation: startAnimation 1s ease-in;
`;

export const PhotoSlider = styled.div``;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 100px;
  border: 2px solid #fff;
  border-radius: 20px;

  & > h4 {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: -0.05rem;
    line-height: 1.5;
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
