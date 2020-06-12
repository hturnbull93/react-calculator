import React from "react";
import { shallow } from "enzyme";
import Key from "./Key";

describe("Key", () => {
  it("renders a div", () => {
    const wrapper = <Key keyAction={jest.fn()} keyType={""} keyValue={""} />;
    expect(wrapper.find("div").length).toEqual(1);
  });
});
