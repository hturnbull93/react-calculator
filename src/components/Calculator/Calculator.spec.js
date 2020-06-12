import React from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";

describe("Calculator", () => {
  it("renders a div", () => {
    const wrapper = shallow(<Calculator />);
    expect(wrapper.find("div").length).toEqual(1);
  });
  
  it('renders the Display Component', () => {
    const wrapper = shallow(<Calculator />);
    expect(wrapper.containsMatchingElement(<Display />)).toEqual(true);
  });
});
