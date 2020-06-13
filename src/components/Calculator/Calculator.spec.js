import React from "react";
import { shallow, mount } from "enzyme";
import Calculator from "./Calculator";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

describe("Calculator", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Calculator />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders a div", () => {
    const wrapper = shallow(<Calculator />);
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("renders the Display Component", () => {
    const wrapper = shallow(<Calculator />);
    const display = (
      <Display displayValue={wrapper.instance().state.displayValue} />
    );
    expect(wrapper.containsMatchingElement(display)).toEqual(true);
  });

  it("renders the Keypad Component", () => {
    const wrapper = shallow(<Calculator />);
    const keypad = (
      <Keypad
        callOperator={wrapper.instance().callOperator}
        numbers={wrapper.instance().state.numbers}
        operators={wrapper.instance().state.operators}
        setOperator={wrapper.instance().setOperator}
        updateDisplay={wrapper.instance().updateDisplay}
      />
    );
    expect(wrapper.containsMatchingElement(keypad)).toEqual(true);
  });

  describe("Functionality", () => {
    it("updateDisplay is called when a number key is clicked", () => {
      const wrapper = mount(<Calculator />);
      const spy = jest.spyOn(wrapper.instance(), "updateDisplay");
      wrapper.instance().forceUpdate();
      expect(spy).toHaveBeenCalledTimes(0)
      wrapper.find('.number-key').first().simulate('click');
      expect(spy).toHaveBeenCalledTimes(1)
    });

    it("setOperator is called when an operator key is clicked", () => {
      const wrapper = mount(<Calculator />);
      const spy = jest.spyOn(wrapper.instance(), "setOperator");
      wrapper.instance().forceUpdate();
      expect(spy).toHaveBeenCalledTimes(0)
      wrapper.find('.operator-key').first().simulate('click');
      expect(spy).toHaveBeenCalledTimes(1)
    });

    it("callOperator is called when the submit key is clicked", () => {
      const wrapper = mount(<Calculator />);
      const spy = jest.spyOn(wrapper.instance(), "callOperator");
      wrapper.instance().forceUpdate();
      expect(spy).toHaveBeenCalledTimes(0)
      wrapper.find('.submit-key').first().simulate('click');
      expect(spy).toHaveBeenCalledTimes(1)
    });
  });
});
