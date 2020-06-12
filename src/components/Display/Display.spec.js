import React from "react";
import { shallow } from "enzyme";
import Display from "./Display";

describe("Display", () => {
  it("renders a div", () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find("div").length).toEqual(1);
  });
});
