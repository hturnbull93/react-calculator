import React from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";
import Display from "../Display/Display";

describe("Calculator", () => {
  it("renders a div", () => {
    const wrapper = shallow(<Calculator />);
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("renders the Display Component", () => {
    const wrapper = shallow(<Calculator />);
    const displayValue = wrapper.instance().state.displayValue;
    const expected = <Display displayValue={displayValue} />;
    expect(wrapper.containsMatchingElement(expected)).toEqual(true);
  });
});
