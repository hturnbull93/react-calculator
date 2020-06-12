import React from 'react';
import { shallow } from 'enzyme';
import Keypad from './Keypad';

describe('Keypad', () => {
  it('renders a div', () => {
    const wrapper = shallowKeypad()
    expect(wrapper.find('div').length).toEqual(1);
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