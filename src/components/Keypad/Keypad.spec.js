import React from "react";
import { shallow } from "enzyme";
import Keypad from "./Keypad";

describe("Keypad", () => {
  it("renders 3 divs", () => {
    const wrapper = shallowKeypad();
    expect(wrapper.find("div").length).toEqual(3);
  });

  it("renders the values of numbers", () => {
    const wrapper = mountKeypad();
    wrapper.setProps({ numbers: ["0", "1", "2"] });
    expect(wrapper.find(".numbers-container").text()).toEqual("012");
  });

  it("renders the values of operators", () => {
    const wrapper = mountKeypad();
    wrapper.setProps({ operators: ["+", "-", "*", "/"] });
    expect(wrapper.find(".operators-container").text()).toEqual("+-*/");
  });

  it("renders a Key component for each of numbers and operators, and submit", () => {
    const wrapper = shallowKeypad();
    const numbers = ["0", "1"];
    const operators = ["+", "-"];
    const submit = 1;
    const keyTotal = numbers.length + operators.length + submit;
    wrapper.setProps({ numbers, operators });
    expect(wrapper.find("Key").length).toEqual(keyTotal);
  });
});

function shallowKeypad() {
  return shallow(
    <Keypad
      callOperator={jest.fn()}
      numbers={[]}
      operators={[]}
      setOperator={jest.fn()}
      updateDisplay={jest.fn()}
    />
  );
}

function mountKeypad() {
  return mount(
    <Keypad
      callOperator={jest.fn()}
      numbers={[]}
      operators={[]}
      setOperator={jest.fn()}
      updateDisplay={jest.fn()}
    />
  );
}

