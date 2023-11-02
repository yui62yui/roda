import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 80px;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: url(/image/장비2.jpg) no-repeat center/cover;
    z-index: 5;
  }

  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 7;
  }

  & > svg {
    display: block;
    width: 100px;
    height: 100px;
    color: #fff;
    z-index: 10;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;

  & > div > button {
    position: absolute;
    right: 0;
    top: 0;
    width: 70px;
    height: 70px;
    outline: none;
    background: transparent;
    border: none;
    cursor: pointer;
    color: white;
    transition: 1s;
    transform: rotate(0);

    &:hover {
      transform: rotate(180);
    }
  }
`;

export const Arrow = styled.div`
  width: 80px;
  height: 80px;
  color: #fff;

  & > svg {
    width: 80px;
    height: 80px;
    z-index: 1100;
    cursor: pointer;
  }

  & > .left {
    position: absolute;
    top: 50%;
    left: 10px;
  }

  & .right {
    position: absolute;
    top: 50%;
    right: 10px;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;

  & > img {
    height: 100vh;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
  padding: 80px 0;
  z-index: 10;

  & > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    letter-spacing: -0.05rem;
    line-height: 1.5;
    color: #fff;
  }

  &:last-child {
    padding-top: 50px;
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @keyframes menuPhoto {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }

  animation: menuPhoto 2s ease-in-out;
`;

export const PhotoBox = styled.div`
  position: relative;
  width: 400px;
  height: 565px;

  & > img {
    width: 400px;
    height: 565px;
    border: 3px solid transparent;

    &:hover {
      cursor: zoom-in;
      border: 3px solid #fff;
      border-radius: 15px;
    }
  }
`;

export const VideoContainer = styled.div`
  width: 800px;
  height: 450px;
  background-color: #999;
`;
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 600px;
  padding: 30px 0;
  border: 2px solid #fff;
  border-radius: 20px;
  transition: 0.3s;
  cursor: default;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border: 2px solid #ff75b3;
  }

  &:hover .ButtonBox {
    background-color: rgba(255, 255, 255, 0.5);
  }

  & > h4 {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: -0.05rem;
    line-height: 1.5;
  }

  & .ButtonBox {
    width: 230px;
    height: 60px;
    padding: 10px 15px 10px 20px;
    background-color: rgba(255, 255, 255, 0);
    color: #fff;

    & > img {
      width: 35px;
      border-radius: 3px;
      margin-right: 15px;
    }

    & > span {
      color: #fff;
      font-size: 1.4rem;
      font-family: "IBM Plex Sans KR", sans-serif;
      letter-spacing: -0.1rem;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.6);
      border: 2px solid #c847ff;
    }
  }
`;
