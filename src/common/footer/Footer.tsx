import {
  IconContainer,
  InnerContainer,
  LeftContainer,
  RightContainer,
  Wrapper,
} from "./StyledFooter";

const Footer = () => {
  return (
    <Wrapper>
      <InnerContainer>
        <LeftContainer>
          <p>TEL. 010-6502-1937</p>
          <p>운영시간: 10:00AM - 22:00PM</p>
          <p>서울특별시 마포구 연남동 연남로1길 22(연남동) 2층</p>
        </LeftContainer>
        <RightContainer>
          <IconContainer>
            <a
              href="https://twitter.com/RoDa_Studio_"
              title="로다스튜디오 X/트위터"
              target="_blank"
            >
              <img src="/image/x_logo.png" alt="X 아이콘" />
            </a>
            <a
              href="https://www.instagram.com/roda_.studio/"
              title="로다스튜디오 인스타그램"
              target="_blank"
            >
              <img src="/image/insta_logo.png" alt="인스타그램 아이콘" />
            </a>
            <a
              href="https://blog.naver.com/music_diary_"
              title="로다스튜디오 네이버 블로그"
              target="_blank"
            >
              <img src="/image/blog_logo.png" alt="네이버 블로그 아이콘" />
            </a>
          </IconContainer>
          <p>COPYRIGHTⓒ by YUI ALL RIGHTS RESERVED</p>
        </RightContainer>
      </InnerContainer>
    </Wrapper>
  );
};

export default Footer;
