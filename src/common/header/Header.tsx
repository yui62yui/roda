import { LeftWrapper, RightWrapper, Wrapper } from "./StyledHeader";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <Link to={"/"}>
        <LeftWrapper></LeftWrapper>
      </Link>
      <RightWrapper>
        <NavLink
          className={({ isActive }) => (isActive ? "activated" : "")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activated" : "")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activated" : "")}
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activated" : "")}
          to="/contact"
        >
          Contact
        </NavLink>
      </RightWrapper>
    </Wrapper>
  );
};

export default Header;
