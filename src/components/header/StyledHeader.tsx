import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0px 50px;
  background-color: #02244f;
`;

export const LeftWrapper = styled.div`
  width: 80px;
  height: 80px;
  background-color: #999;
  background: url(${process.env.PUBLIC_URL}/image/icon_white.png) no-repeat
    center / cover;
`;

export const RightWrapper = styled.div`
  display: flex;
  gap: 40px;

  & > a {
    position: relative;
    color: white;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  & > a:hover {
    transform: scale(110%);
  }

  & > a::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transition: 0.3s;
    background-color: white;
  }

  & > a:hover::after {
    content: "";
    transform: scaleX(100%);
  }

  & > a.activated::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 2px;
    transform: scaleX(100%);
    transition: 0.3s;
    background-color: white;
  }
`;
