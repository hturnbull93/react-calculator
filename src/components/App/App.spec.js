import React from "react";
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';
import App from "./App";
import Calculator from "../Calculator/Calculator";

describe("App", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a div", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("renders the Calculator Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });
});
