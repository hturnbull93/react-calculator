import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Calculator from '../Calculator/Calculator'

describe('App', () => {
  it('should render a <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toEqual(1);
  });
  
  it('should render the Calculator Component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });
});