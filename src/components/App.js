import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  GlobalStyle as BuffetGlobalStyles,
  Fonts as BuffetFonts,
} from "buffetjs";
import Peer from "peerjs";

import theme from "../utils/theme";
import GlobalStyles from "../utils/GlobalStyles";
import Header from "./Header";
import getEditor from "../utils/editor-actions";
import Sidebar from "./Sidebar";
import EditorView from "./Editors/EditorView";
import { EditorCtxProvider } from "./Editors/EditorContext";

const Main = styled.main`
  min-height: calc(100vh - ${props => props.theme.layout.navHeight} - 1rem);
  position: relative;
  flex: 1;
`;

function App() {
  const editorConfig = getEditor();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userLink = params.get("q");
    if (userLink) {
      const peer = new Peer();
      const connection = peer.connect(userLink);
      connection.on("open", () => {
        connection.on("data", value => {
          editorConfig.setValue(value);
        });
      });
    }
  }, [editorConfig]);
  return (
    <ThemeProvider theme={theme}>
      <EditorCtxProvider value={editorConfig}>
        <Header />
        <div
          role="group"
          css={`
            display: flex;
          `}
        >
          <Sidebar editorConfig={editorConfig} />
          <Main>
            <EditorView />
          </Main>
        </div>
        <BuffetFonts />
        <BuffetGlobalStyles />
        <GlobalStyles />
      </EditorCtxProvider>
    </ThemeProvider>
  );
}

export default App;
