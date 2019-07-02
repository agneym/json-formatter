import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";

import theme from "./utils/theme";
import GlobalStyles from "./utils/global-styles";
import Editor from "./Editor";
import Header from "./Header";

const Main = styled.main`
  height: calc(100vh - ${props => props.theme.layout.navHeight} - 2rem);
  padding: 1rem 2rem;
  position: relative;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Header />
        <Main>
          <Editor />
        </Main>
        <GlobalStyles />
      </Fragment>
    </ThemeProvider>
  )
}

export default App;
