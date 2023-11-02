import styled from "styled-components";

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  height: 40px;
  padding: 0 20px;
  border: 2px solid #fff;
  border-radius: 30px;
  background-color: #515f9e;
  color: #fff;
  transition: 0.3s;

  & span {
    font-family: "Roboto Slab", serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: #fff;
  }

  &:hover {
    transform: scale(110%);
    border: 2px solid #fff;
    background-color: #02244f;
  }
`;
