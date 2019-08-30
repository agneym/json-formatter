import React from "react";
import { render } from "@testing-library/react";

import App from "../components/App";

jest.mock("monaco-editor/esm/vs/editor/editor.api.js");

describe("App Component", () => {
  it("renders without fail", () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
});
