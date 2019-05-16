import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors.js';

describe('Colors Component tests', () => {
  it('renders the colors', () => {
    const colors = [
      { name: 'Red', hex: '#FF0000' },
      { name: 'Green', hex: '#00FF00' },
      { name: 'Blue', hex: '#0000FF' }
    ];
    const wrapper = shallow(<Colors colors={colors} />);
    expect(wrapper).toMatchSnapshot();
  });
});
