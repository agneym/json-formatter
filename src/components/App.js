import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  GlobalStyle as BuffetGlobalStyles,
  Fonts as BuffetFonts,
} from "buffetjs";
import Peer from "peerjs";

import theme from "../utils/theme";
import GlobalStyles from "../utils/GlobalStyles";
import Editor from "./Editor";
import Header from "./Header";
import getEditor from "../utils/editor-actions";
import Sidebar from "./Sidebar";

const Main = styled.main`
  min-height: calc(100vh - ${props => props.theme.layout.navHeight} - 1rem);
  position: relative;
  flex: 1;
`;

function App() {
  const editorConfig = getEditor();
  const params = new URLSearchParams(window.location.search);
  const userLink = params.get("user");
  if(userLink) {
    const peer = new Peer();
    const connection = peer.connect(userLink);
    connection.on("open", () => {
      connection.send("hello");
    });
  }
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Header editorConfig={editorConfig} />
        <div
          role="group"
          css={`
            display: flex;
          `}
        >
          <Sidebar editorConfig={editorConfig} />
          <Main>
            <Editor editorConfig={editorConfig} />
          </Main>
        </div>
        <BuffetFonts />
        <BuffetGlobalStyles />
        <GlobalStyles />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
