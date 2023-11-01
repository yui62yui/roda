import { LeftWrapper, RightWrapper, Wrapper } from "./StyledHeader";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <LeftWrapper></LeftWrapper>
      <RightWrapper>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/contact"}>Contact</Link>
      </RightWrapper>
    </Wrapper>
  );
};

export default Header;
