import React from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

describe("Calculator", () => {
  it("renders a div", () => {
    const wrapper = shallow(<Calculator />);
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("renders the Display Component", () => {
    const wrapper = shallow(<Calculator />);
    const display = <Display displayValue={wrapper.instance().state.displayValue} />;
    expect(wrapper.containsMatchingElement(display)).toEqual(true);
  });

  it('renders the Keypad Component', () => {
    const wrapper = shallow(<Calculator />);
    const keypad = (
      <Keypad
        callOperator={wrapper.instance().callOperator}
        numbers={wrapper.instance().state.numbers}
        operators={wrapper.instance().state.operators}
        setOperator={wrapper.instance().setOperator}
        updateDisplay={wrapper.instance().updateDisplay}
      />
    )
    expect(wrapper.containsMatchingElement(keypad)).toEqual(true);
  });
});
