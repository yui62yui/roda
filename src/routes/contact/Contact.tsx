import { useEffect } from "react";
import { Wrapper } from "./StyledContact";

const Contact = () => {
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return <Wrapper></Wrapper>;
};

export default Contact;
