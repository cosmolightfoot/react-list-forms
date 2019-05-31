import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('header test', () => {
  it('header snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
