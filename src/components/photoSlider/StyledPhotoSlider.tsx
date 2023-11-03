import styled from "styled-components";

export const Wrapper = styled.div`
  & .slick-prev {
    left: -5rem;
  }
  & .slick-next {
    right: -5rem;
  }

  @media screen and (max-width: 500px) {
    & .slick-prev {
      left: -4rem;
    }
    & .slick-next {
      right: -4rem;
    }
    & .slick-arrow {
      font-size: 1.4rem;
    }
  }
`;
