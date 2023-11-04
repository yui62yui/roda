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
    height: 200vh;
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

  & .ButtonBox {
    width: 130px;
    padding: 0px 18px;
  }

  @media screen and (max-width: 500px) {
    min-width: 320px;
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

  @media screen and (max-width: 500px) {
  }

  & > div > button {
    position: absolute;
    right: 0;
    top: 0;
    width: 7rem;
    height: 7rem;
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
  width: 8rem;
  height: 8rem;
  color: #fff;

  & > svg {
    width: 8rem;
    height: 8rem;
    z-index: 1100;
    cursor: pointer;
  }

  & > .left {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    @media screen and (max-width: 500px) {
      width: 50px;
      left: -0.5rem;
    }
  }

  & > .right {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    @media screen and (max-width: 500px) {
      width: 50px;
      right: -0.5rem;
    }
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

  @media screen and (max-width: 500px) {
    & > img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: auto;
    }
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  width: 100%;
  padding: 80px 0;
  z-index: 10;

  & > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    letter-spacing: -0.05rem;
    line-height: 1.5;
    color: #fff;

    @media screen and (max-width: 500px) {
      font-size: 2rem;
    }
  }

  &:last-child {
    padding-top: 50px;
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }

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
  width: 40rem;

  & > img {
    width: 40rem;
    border: 3px solid transparent;

    @media screen and (max-width: 500px) {
      width: 30rem;
    }

    &:hover {
      cursor: zoom-in;
      border: 3px solid #fff;
      border-radius: 15px;
    }
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 60%;
  height: auto;
  padding-top: 50%;

  & > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 60rem;
  padding: 3rem 0;
  border: 2px solid #fff;
  border-radius: 20px;
  transition: 0.3s;
  cursor: default;

  @media screen and (max-width: 500px) {
    width: 35rem;
  }

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

    @media screen and (max-width: 500px) {
      font-size: 1.4rem;
    }
  }

  & .ButtonBox {
    width: 230px;
    height: 60px;
    padding: 10px 15px 10px 20px;
    background-color: rgba(255, 255, 255, 0);
    color: #fff;

    @media screen and (max-width: 500px) {
      width: 200px;
      height: 50px;
    }

    & > img {
      width: 35px;
      border-radius: 3px;
      margin-right: 15px;

      @media screen and (max-width: 500px) {
        width: 28px;
      }
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
