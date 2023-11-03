import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 80px;
  background: url(/image/장비12.jpg) no-repeat center/cover;

  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
  }

  & h4,
  p {
    font-family: "IBM Plex Sans KR", sans-serif;
    letter-spacing: -0.05rem;
  }

  & a {
    color: #222;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 80px;
  padding: 30px;
  border-radius: 30px;
  z-index: 10;
  background-color: #e7e7e7;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 400px;
  height: 100%;
`;
export const MapContainer = styled.div`
  width: 400px;
  height: 400px;
  background-color: #999;
`;
export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
export const TopBox = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1.4rem;
  font-weight: 500;
  background-color: #fff;

  & > button {
    padding: 3px 8px;
    outline: none;
    border: 2px solid transparent;
    background-color: #cecece;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: -0.05rem;
    transition: 0.3s;

    &:hover {
      font-weight: 600;
      cursor: pointer;
      border: 2px solid #777;
      background-color: #999;
    }
  }
`;
export const BottomBox = styled.div`
  display: flex;
  gap: 5px;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.3rem;

  & > svg {
    width: 25px;
  }

  & span {
    font-weight: 600;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  text-align: left;
  width: 300px;

  & h4 {
    font-size: 2.8rem;
    font-family: "Roboto Slab", serif;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ContactBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    border: 3px solid #fff;
    background-color: #f2f2f2;
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      background-color: #fff;
    }
  }

  & p {
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: -0.03rem;
  }
`;
