import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color.js';

describe('Color test', () => {
  it('renders Color component', () => {
    const wrapper = shallow(<Color name="Red" hex="#FF0000" />);
    expect(wrapper).toMatchSnapshot();
  });
});
