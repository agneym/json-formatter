import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";

import theme from "./utils/theme";
import Editor from "./Editor";
import Header from "./Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Header />
        <main>
          <Editor />
        </main>
      </Fragment>
    </ThemeProvider>
  )
}

export default App;
