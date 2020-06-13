import React from "react";
import { shallow } from "enzyme";
import Key from "./Key";

describe("Key", () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Key keyAction={jest.fn()} keyType={""} keyValue={""} />
    );
    expect(wrapper).toMatchSnapshot()
  });

  it("renders a div", () => {
    const wrapper = shallow(
      <Key keyAction={jest.fn()} keyType={""} keyValue={""} />
    );
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("renders the keyValue", () => {
    const wrapper = shallow(
      <Key keyAction={jest.fn()} keyType={""} keyValue={""} />
    );
    wrapper.setProps({ keyValue: "test" });
    expect(wrapper.text()).toEqual("test");
  });
});
