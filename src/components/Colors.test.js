import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors.js';

describe('Colors test', () => {
  it('can render Colors', () => {
    const colorsList = [
      { name: 'Red', rgb: { red: 255, green: 0, blue: 0 } },
      { name: 'White', rgb: { red: 255, green: 255, blue: 255 } },
      { name: 'Black', rgb: { red: 0, green: 0, blue: 0 } },
      { name: 'Blue', rgb: { red: 0, green: 0, blue: 255 } }
    ];

    const wrapper = shallow(<Colors colors={colorsList} />);
    expect(wrapper).toMatchSnapshot();
  });
});
