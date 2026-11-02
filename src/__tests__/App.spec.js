import React from "react";
import { render } from "@testing-library/react";

import "../../__mocks__/matchMedia.mock";
import App from "../components/App";

describe("App Component", () => {
  it("renders without fail", () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
});
