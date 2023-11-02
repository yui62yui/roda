import styled from "styled-components";

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  height: 40px;
  padding: 0 20px;
  border: 2px solid transparent;
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
    background-color: #373d57;
  }
`;

const MenuButton = () => {
  return (
    <ButtonBox>
      <span>About</span>
      <svg
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width={"20px"}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        ></path>
      </svg>
    </ButtonBox>
  );
};

export default MenuButton;
