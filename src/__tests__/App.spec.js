import React from "react";
import { shallow } from "enzyme";

import App from "../App";

describe("App Component", () => {
  it("show render component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
