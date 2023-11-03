import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 80px;
  color: #fff;
  background: url(${process.env.PUBLIC_URL}/image/장비5.jpg) no-repeat center /
    cover;

  &::after {
    position: fixed;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 200vh;
    background-color: rgba(0, 0, 0, 0.75);
  }

  & .ButtonBox {
    @media screen and (max-width: 500px) {
      width: 110px;
    }
    @keyframes buttonAnimation {
      0% {
        transform: scale(100%);
      }
      60% {
        transform: scale(100%);
      }
      70% {
        transform: scale(120%);
      }
      80% {
        transform: scale(100%);
      }
      90% {
        transform: scale(120%);
      }
      100% {
        transform: scale(100%);
      }
    }
    animation-name: buttonAnimation;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-direction: alternate;
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
  padding: 100px 0;
  z-index: 10;

  @keyframes innerAnimation {
    from {
      transform: scale(0%);
      opacity: 50%;
    }
    to {
      transform: scale(100%);
      opacity: 100%;
    }
  }
  animation-name: innerAnimation;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-play-state: running;

  & h3 > span,
  & h1 > span {
    font-weight: 700;
    color: #a0afee;
  }

  & h1,
  h2,
  h3 {
    cursor: default;
  }
`;

export const TopContainer = styled.div`
  & > h3 {
    position: relative;
    display: inline-block;
    letter-spacing: 0.3rem;
    font-size: 3rem;
    letter-spacing: 0.1rem;

    @media screen and (max-width: 500px) {
      font-size: 2.5rem;
    }

    &::after {
      content: "";
      left: -5%;
      position: absolute;
      bottom: -1.2rem;
      width: 110%;
      height: 2px;
      background-color: #fff;

      @keyframes lineAnimation {
        from {
          transform: translate3d(-10000%, 0, 0);
          opacity: 0%;
        }
        50% {
          transform: translate3d(-100%, 0, 0);
          opacity: 0%;
        }
        100% {
          transform: translateZ(0);
          opacity: 100%;
        }
      }
      animation-name: lineAnimation;
      animation-duration: 2s;
      animation-timing-function: ease-out;
      animation-iteration-count: 1;
      animation-delay: 0s;
    }
  }
`;

export const PhotoContainer = styled.a`
  position: relative;
  width: 60rem;
  height: 20rem;
  margin: 5rem 0 4rem;
  border-radius: 100%;
  background: url(${process.env.PUBLIC_URL}/image/icon2.png) no-repeat center /
    55%;
  background-color: #fff;
  transition: 0.3s ease-in-out;

  & > span {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    line-height: 4rem;
    font-size: 2.4rem;
    font-family: "Roboto Slab", serif;
    opacity: 0%;

    & > span {
      font-family: "IBM Plex Sans KR", sans-serif;
      letter-spacing: -0.1rem;
    }
  }

  @media screen and (max-width: 500px) {
    width: 30rem;
    height: 10rem;
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
      border: 2px solid #fff;
      background-color: #02244f;
      z-index: 10;
    }

    & > span {
      opacity: 100%;
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

    @media screen and (max-width: 500px) {
      font-size: 1.6rem;
    }
  }

  & > h1 {
    margin: 1.2rem 0rem 3rem;
    font-family: "Roboto Slab", serif;
    font-style: italic;
    font-size: 3.2rem;
    font-weight: 700;
    letter-spacing: 0.3rem;

    @media screen and (max-width: 500px) {
      font-size: 2.5rem;
    }
  }
`;
