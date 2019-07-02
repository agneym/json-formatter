import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";

import theme from "./utils/theme";
import GlobalStyles from "./utils/global-styles";
import Editor from "./Editor";
import Header from "./Header";
import getEditor from "./utils/editor-actions";
import Sidebar from "./Sidebar";

const Main = styled.main`
  height: calc(100vh - ${props => props.theme.layout.navHeight} - 2rem);
  padding: 1rem 2rem;
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
        <GlobalStyles />
      </Fragment>
    </ThemeProvider>
  )
}

export default App;
