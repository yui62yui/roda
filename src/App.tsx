import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./routes/contact/Contact";
import About from "./routes/about/About";
import Home from "./routes/home/Home";
import Products from "./routes/products/Products";
import Layout from "./components/layout/Layout";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const Wrapper = styled.div``;

const GlobalStyles = createGlobalStyle`

  ${reset}
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;
