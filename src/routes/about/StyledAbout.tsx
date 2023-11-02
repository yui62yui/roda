import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  background: url(/image/장비3.jpg) no-repeat center/cover;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  z-index: 1000;

  & > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    letter-spacing: -0.05rem;
    color: #fff;
  }
`;

export const PhotoSliderContainer = styled.div`
  width: 750px;
  height: 450px;
  background-color: #999;
`;

export const PhotoSlider = styled.div``;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 580px;
  height: 140px;
  border: 2px solid #fff;
  border-radius: 20px;

  & > h4 {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: -0.05rem;
    line-height: 1.5;
  }
`;
