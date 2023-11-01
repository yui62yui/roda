import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./routes/contact/Contact";
import About from "./routes/about/About";
import Home from "./routes/home/Home";
import Products from "./routes/products/Products";
import Layout from "./components/layout/Layout";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);

const Wrapper = styled.div``;

const GlobalStyles = createGlobalStyle`

  ${reset}
  * {
    box-sizing: border-box;
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
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;
