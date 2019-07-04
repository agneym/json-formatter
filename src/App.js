import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle as BuffetGlobalStyles } from 'buffetjs';

import theme from "./utils/theme";
import GlobalStyles from "./utils/GlobalStyles";
import Editor from "./Editor";
import Header from "./Header";
import getEditor from "./utils/editor-actions";
import Sidebar from "./Sidebar";

const Main = styled.main`
  height: calc(100vh - ${props => props.theme.layout.navHeight} - 2rem);
  position: relative;
  flex: 1;
`;

function App() {
  const editorConfig = getEditor();
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Header editorConfig={editorConfig} />
        <div role="group" css={` display: flex; `}>
          <Sidebar />
          <Main>
            <Editor editorConfig={editorConfig} />
          </Main>
        </div>
        <BuffetGlobalStyles />
        <GlobalStyles />
      </Fragment>
    </ThemeProvider>
  )
}

export default App;
