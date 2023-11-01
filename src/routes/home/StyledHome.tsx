import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  color: #fff;
  background: url(${process.env.PUBLIC_URL}/image/장비5.jpg) no-repeat center /
    cover;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;

  & h3 > span,
  & h1 > span {
    font-weight: 700;
    color: #c1caf3;
  }
`;

export const TopContainer = styled.div`
  & > h3 {
    letter-spacing: 0.3rem;
    font-size: 3rem;
    letter-spacing: 0.1rem;
  }
`;

export const PhotoContainer = styled.a`
  position: relative;
  width: 500px;
  height: 200px;
  margin: 40px 0;
  border-radius: 50%;
  background: url(${process.env.PUBLIC_URL}/image/icon2.png) no-repeat center /
    60%;
  background-color: #fff;
  transition: 0.3s ease-in-out;

  & > span {
    line-height: 4rem;
    font-size: 2.4rem;
    font-family: "Roboto Slab", serif;
    color: transparent;
  }

  &:hover {
    transform: scale(105%);

    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #000;
      z-index: 10;
    }

    & > span {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      color: #fff;
      z-index: 100;
    }
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  & > h2 {
    font-size: 1.8rem;
    letter-spacing: -0.1rem;
  }

  & > h1 {
    margin: 12px 0px 30px;
    font-family: "Roboto Slab", serif;
    font-style: italic;
    font-size: 3.2rem;
    font-weight: 700;
    letter-spacing: 0.3rem;
  }
`;
