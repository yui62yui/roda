import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 180px;
  background-color: #02244f;
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 4rem 10rem;
  color: white;
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;

  & > p:first-child {
    font-size: 2.4rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
  }
  & > p:nth-child(2) {
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.06rem;
  }
  & > p:last-child {
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 2.5rem;

  & > p {
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  gap: 2.5rem;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;

    & > img {
      width: 30px;
      height: 30px;
    }
  }
`;
