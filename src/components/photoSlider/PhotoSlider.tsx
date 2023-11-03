import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Wrapper } from "./StyledPhotoSlider";

const PhotoSlider = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <img src="/image/about/장비1.jpg" />
        <img src="/image/about/장비2.jpg" />
        <img src="/image/about/장비3.jpg" />
        <img src="/image/about/장비4.jpg" />
        <img src="/image/about/장비5.jpg" />
        <img src="/image/about/장비6.jpg" />
        <img src="/image/about/장비7.jpg" />
        <img src="/image/about/장비8.jpg" />
        <img src="/image/about/장비10.jpg" />
        <img src="/image/about/장비11.jpg" />
        <img src="/image/about/장비12.jpg" />
        <img src="/image/about/장비13.jpg" />
        <img src="/image/about/장비14.jpg" />
        <img src="/image/about/장비15.jpg" />
        <img src="/image/about/장비16.jpg" />
      </Slider>
    </Wrapper>
  );
};

export default PhotoSlider;
