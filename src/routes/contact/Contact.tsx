import { useEffect } from "react";
import {
  AddressContainer,
  BottomBox,
  ContactBox,
  ContactContainer,
  InnerContainer,
  LeftContainer,
  MapContainer,
  RightContainer,
  TopBox,
  Wrapper,
} from "./StyledContact";
import NaverMap from "components/NaverMap";

const Contact = () => {
  const handleCopyClick = (target: string, textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    alert(`로다스튜디오의 ${target}를 클립보드에 복사하였어요🥰!`);
  };

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <Wrapper>
      <InnerContainer>
        <LeftContainer>
          <MapContainer>
            <NaverMap></NaverMap>
          </MapContainer>
          <AddressContainer>
            <TopBox>
              <p>서울시 마포구 연남동 연남로 1길 22(연남동) 2층</p>
              <button
                onClick={() => {
                  handleCopyClick(
                    "주소",
                    "서울시 마포구 연남동 연남로 1길 22(연남동) 2층"
                  );
                }}
              >
                주소 복사
              </button>
            </TopBox>
            <BottomBox>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 4C7.25 4 5 6.25 5 9V21C5.00138 22.1544 5.33508 23.284 5.96123 24.2538C6.58738 25.2236 7.4795 25.9926 8.531 26.469L6 29H8.344L10.375 26.969C10.575 26.989 10.793 27 11 27H21C21.207 27 21.426 26.988 21.625 26.969L23.656 29H26L23.469 26.469C24.5205 25.9926 25.4126 25.2236 26.0388 24.2538C26.6649 23.284 26.9986 22.1544 27 21V9C27 6.25 24.75 4 22 4H10ZM10 6H22C23.32 6 24.438 6.828 24.844 8H7.156C7.36265 7.41192 7.74781 6.90307 8.25768 6.54451C8.76756 6.18595 9.37669 5.99558 10 6ZM7 10H15V16H7V10ZM17 10H25V16H17V10ZM7 18H25V21C25 23.219 23.219 25 21 25H11C8.781 25 7 23.219 7 21V18ZM10.5 20C10.1022 20 9.72064 20.158 9.43934 20.4393C9.15804 20.7206 9 21.1022 9 21.5C9 21.8978 9.15804 22.2794 9.43934 22.5607C9.72064 22.842 10.1022 23 10.5 23C10.8978 23 11.2794 22.842 11.5607 22.5607C11.842 22.2794 12 21.8978 12 21.5C12 21.1022 11.842 20.7206 11.5607 20.4393C11.2794 20.158 10.8978 20 10.5 20ZM21.5 20C21.1022 20 20.7206 20.158 20.4393 20.4393C20.158 20.7206 20 21.1022 20 21.5C20 21.8978 20.158 22.2794 20.4393 22.5607C20.7206 22.842 21.1022 23 21.5 23C21.8978 23 22.2794 22.842 22.5607 22.5607C22.842 22.2794 23 21.8978 23 21.5C23 21.1022 22.842 20.7206 22.5607 20.4393C22.2794 20.158 21.8978 20 21.5 20Z"
                  fill="black"
                />
              </svg>
              <p>
                <span>2호선/공항철도/경의중앙선 홍대입구역 3번출구 </span> 도보
                8분 거리
              </p>
            </BottomBox>
          </AddressContainer>
        </LeftContainer>
        <RightContainer>
          <ContactContainer>
            <h4>Contact</h4>
            <p>아이콘 클릭 시 번호/이메일이 복사됩니다!🙇‍♀️</p>
            <ContactBox className="Phone">
              <div
                onClick={() => {
                  handleCopyClick("대표번호", "01065021937");
                }}
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.625 21.1641L24.1869 18.2779L24.1623 18.267C23.7438 18.0866 23.2868 18.014 22.833 18.0558C22.3792 18.0976 21.9431 18.2524 21.5647 18.5063C21.5116 18.5418 21.4605 18.5801 21.4115 18.6211L18.3613 21.2188C16.584 20.2549 14.7479 18.4338 13.7826 16.6783L16.3885 13.5803C16.4304 13.5303 16.4692 13.4778 16.5047 13.4231C16.7519 13.0459 16.9019 12.6135 16.9415 12.1644C16.9811 11.7152 16.909 11.2632 16.7316 10.8486C16.7274 10.8407 16.7238 10.8325 16.7207 10.824L13.8359 4.37501C13.5992 3.83569 13.195 3.38693 12.6834 3.09514C12.1717 2.80336 11.5797 2.68406 10.9949 2.75489C9.01028 3.01561 7.18839 3.98984 5.86953 5.49563C4.55067 7.00143 3.82503 8.93581 3.82813 10.9375C3.82813 22.0951 12.9049 31.1719 24.0625 31.1719C26.0642 31.175 27.9986 30.4493 29.5044 29.1305C31.0102 27.8116 31.9844 25.9897 32.2451 24.0051C32.316 23.4203 32.1967 22.8283 31.9049 22.3167C31.6131 21.805 31.1643 21.4009 30.625 21.1641ZM24.0625 27.8906C19.5679 27.8852 15.259 26.0973 12.0808 22.9192C8.90268 19.741 7.11481 15.4321 7.10938 10.9375C7.10625 9.80479 7.49081 8.7051 8.19914 7.82117C8.90748 6.93724 9.89695 6.3223 11.0031 6.07853L13.5762 11.8207L10.9567 14.9406C10.9143 14.9911 10.875 15.0441 10.8391 15.0992C10.5809 15.4937 10.4291 15.9483 10.3984 16.4188C10.3678 16.8893 10.4593 17.3597 10.6641 17.7844C11.952 20.4203 14.6057 23.0563 17.269 24.3469C17.6965 24.5496 18.1693 24.6378 18.6411 24.6031C19.113 24.5683 19.5677 24.4118 19.9609 24.1486C20.0138 24.113 20.0645 24.0742 20.1127 24.0324L23.1793 21.4252L28.9215 23.9969C28.6777 25.1031 28.0628 26.0925 27.1789 26.8009C26.2949 27.5092 25.1952 27.8938 24.0625 27.8906Z"
                    fill="black"
                  />
                </svg>
              </div>
              <p>010-6502-1937</p>
            </ContactBox>

            <ContactBox>
              <div
                className="Email"
                onClick={() => {
                  handleCopyClick("이메일주소", "roda.eent@gmail.com");
                }}
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.37502 7.29171V5.83337C3.98825 5.83337 3.61731 5.98702 3.34382 6.26051C3.07033 6.534 2.91669 6.90493 2.91669 7.29171H4.37502ZM30.625 7.29171H32.0834C32.0834 6.90493 31.9297 6.534 31.6562 6.26051C31.3827 5.98702 31.0118 5.83337 30.625 5.83337V7.29171ZM4.37502 8.75004H30.625V5.83337H4.37502V8.75004ZM29.1667 7.29171V24.7917H32.0834V7.29171H29.1667ZM27.7084 26.25H7.29169V29.1667H27.7084V26.25ZM5.83335 24.7917V7.29171H2.91669V24.7917H5.83335ZM7.29169 26.25C6.90491 26.25 6.53398 26.0964 6.26049 25.8229C5.987 25.5494 5.83335 25.1785 5.83335 24.7917H2.91669C2.91669 25.952 3.37762 27.0648 4.1981 27.8853C5.01857 28.7058 6.13136 29.1667 7.29169 29.1667V26.25ZM29.1667 24.7917C29.1667 25.1785 29.013 25.5494 28.7396 25.8229C28.4661 26.0964 28.0951 26.25 27.7084 26.25V29.1667C28.8687 29.1667 29.9815 28.7058 30.8019 27.8853C31.6224 27.0648 32.0834 25.952 32.0834 24.7917H29.1667Z"
                    fill="black"
                  />
                  <path
                    d="M4.375 7.29175L17.5 20.4167L30.625 7.29175"
                    stroke="black"
                    stroke-width="2.91667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p>roda.eent@gmail.com</p>
            </ContactBox>
          </ContactContainer>
          <ContactContainer>
            <h4>SNS</h4>
            <a
              href="https://blog.naver.com/music_diary_"
              title="로다스튜디오 네이버 블로그"
              target="_blank"
            >
              <ContactBox className="NaverBlog">
                <div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_3_289)">
                      <path
                        d="M16.951 13.3802L7.68333 0H0V25H8.04792V11.6208L17.3167 25H25V0H16.951V13.3802Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3_289">
                        <rect width="25" height="25" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p>Naver Blog</p>
              </ContactBox>
            </a>
            <a
              href="https://twitter.com/RoDa_Studio_"
              title="로다스튜디오 X/트위터"
              target="_blank"
            >
              <ContactBox className="X">
                <div>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7562 2.8125H26.8912L17.8575 13.1375L28.485 27.1875H20.1625L13.645 18.6662L6.18749 27.1875H2.04999L11.7125 16.1437L1.51874 2.8125H10.05L15.9412 10.6012L22.7537 2.8125H22.7562ZM21.305 24.7125H23.5962L8.80624 5.1575H6.34749L21.305 24.7125Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p>X</p>
              </ContactBox>
            </a>
            <a
              href="https://www.instagram.com/roda_.studio/"
              title="로다스튜디오 인스타그램"
              target="_blank"
            >
              <ContactBox className="Instagram">
                <div>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_44_58)">
                      <path
                        d="M21.6475 0.09625C23.17 0.16625 24.2225 0.39 25.195 0.7675C26.1171 1.11226 26.9519 1.65599 27.64 2.36C28.344 3.04811 28.8877 3.8829 29.2325 4.805C29.61 5.77875 29.8338 6.83 29.9038 8.3525C29.99 10.24 30 10.905 30 15C30 19.095 29.99 19.76 29.9038 21.6475C29.8338 23.17 29.61 24.2225 29.2325 25.1962C28.8876 26.1179 28.3439 26.9523 27.64 27.64C26.9519 28.344 26.1171 28.8878 25.195 29.2325C24.2213 29.61 23.17 29.8338 21.6475 29.9038C19.76 29.99 19.0962 30 15 30C10.9038 30 10.2388 29.99 8.3525 29.9038C6.83 29.8338 5.7775 29.61 4.80375 29.2325C3.88208 28.8876 3.04772 28.3439 2.36 27.64C1.65599 26.9519 1.11226 26.1171 0.7675 25.195C0.39 24.2213 0.16625 23.17 0.09625 21.6475C0.01 19.7625 0 19.0975 0 15C0 10.9038 0.01 10.2375 0.09625 8.3525C0.16625 6.83 0.39 5.7775 0.7675 4.805C1.11226 3.8829 1.65599 3.04811 2.36 2.36C3.04775 1.65614 3.8821 1.11243 4.80375 0.7675C5.77875 0.39 6.83 0.16625 8.3525 0.09625C10.2375 0.01 10.9025 0 15 0C19.0962 0 19.7625 0.01 21.6475 0.09625ZM15 3.33375C10.95 3.33375 10.33 3.3425 8.50375 3.42625C7.345 3.47875 6.65 3.62625 6.01125 3.875C5.52097 4.05278 5.07796 4.34056 4.71625 4.71625C4.33976 5.0773 4.05185 5.52051 3.875 6.01125C3.6275 6.64875 3.47875 7.345 3.42625 8.50375C3.3425 10.33 3.33375 10.95 3.33375 15C3.33375 19.05 3.3425 19.67 3.42625 21.4963C3.47875 22.655 3.62625 23.35 3.875 23.9875C4.0875 24.5325 4.3125 24.8787 4.71625 25.2837C5.12125 25.6887 5.4675 25.9137 6.01125 26.125C6.64875 26.3725 7.345 26.5213 8.50375 26.5738C10.3312 26.6575 10.9512 26.6663 15 26.6663C19.05 26.6663 19.6688 26.6575 21.4963 26.5738C22.655 26.5213 23.35 26.3737 23.9887 26.125C24.479 25.9472 24.922 25.6594 25.2837 25.2837C25.6887 24.8787 25.9137 24.5325 26.125 23.9887C26.3725 23.3512 26.5213 22.655 26.5738 21.4963C26.6575 19.6688 26.6663 19.0488 26.6663 15C26.6663 10.9512 26.6575 10.3312 26.5738 8.50375C26.5213 7.345 26.3737 6.65 26.125 6.0125C25.9482 5.52135 25.6603 5.07772 25.2837 4.71625C24.9223 4.33964 24.4787 4.05172 23.9875 3.875C23.35 3.6275 22.6537 3.47875 21.495 3.42625C19.6687 3.3425 19.0487 3.33375 14.9987 3.33375H15ZM15 22.7775C12.9373 22.7775 10.959 21.9581 9.50048 20.4995C8.04191 19.041 7.2225 17.0627 7.2225 15C7.2225 12.9373 8.04191 10.959 9.50048 9.50048C10.959 8.04191 12.9373 7.2225 15 7.2225C17.0627 7.2225 19.041 8.04191 20.4995 9.50048C21.9581 10.959 22.7775 12.9373 22.7775 15C22.7775 17.0627 21.9581 19.041 20.4995 20.4995C19.041 21.9581 17.0627 22.7775 15 22.7775ZM15 19.445C16.1789 19.445 17.3095 18.9767 18.1431 18.1431C18.9767 17.3095 19.445 16.1789 19.445 15C19.445 13.8211 18.9767 12.6905 18.1431 11.8569C17.3095 11.0233 16.1789 10.555 15 10.555C13.8211 10.555 12.6905 11.0233 11.8569 11.8569C11.0233 12.6905 10.555 13.8211 10.555 15C10.555 16.1789 11.0233 17.3095 11.8569 18.1431C12.6905 18.9767 13.8211 19.445 15 19.445ZM22.7775 8.88875C22.3354 8.88875 21.9114 8.71313 21.5988 8.40053C21.2862 8.08793 21.1106 7.66396 21.1106 7.22188C21.1106 6.77979 21.2862 6.35582 21.5988 6.04322C21.9114 5.73062 22.3354 5.555 22.7775 5.555C23.2196 5.555 23.6436 5.73062 23.9562 6.04322C24.2688 6.35582 24.4444 6.77979 24.4444 7.22188C24.4444 7.66396 24.2688 8.08793 23.9562 8.40053C23.6436 8.71313 23.2196 8.88875 22.7775 8.88875Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_44_58">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p>Instagram</p>
              </ContactBox>
            </a>
          </ContactContainer>
        </RightContainer>
      </InnerContainer>
    </Wrapper>
  );
};

export default Contact;
