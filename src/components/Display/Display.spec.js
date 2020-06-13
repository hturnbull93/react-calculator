import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Display from "./Display";

describe("Display", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Display displayValue={""} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a div", () => {
    const wrapper = shallow(<Display displayValue={""} />);
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("renders the value of displayValue", () => {
    const wrapper = shallow(<Display displayValue={""} />);
    wrapper.setProps({ displayValue: "test" });
    expect(wrapper.text()).toEqual("test");
  });
});
