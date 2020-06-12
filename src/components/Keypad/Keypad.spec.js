import React from 'react';
import { shallow } from 'enzyme';
import Keypad from './Keypad';

describe('Keypad', () => {
  it('renders 2 divs', () => {
    const wrapper = shallowKeypad()
    expect(wrapper.find('div').length).toEqual(2);
  });
  
  it('renders the values of numbers', () => {
    const wrapper = shallowKeypad()
    wrapper.setProps({numbers: ['0', '1', '2']});
    expect(wrapper.find('.numbers-container').text()).toEqual('012');
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