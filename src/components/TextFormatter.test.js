import React from 'react';
import { shallow } from 'enzyme';
import TextFormatter from './TextFormatter.js';

describe('Text Formatter test', () => {
  it('Renders the text formatter', () => {
    const wrapper = shallow(<TextFormatter />);
    expect(wrapper).toMatchSnapshot();
  });
});
