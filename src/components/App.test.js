import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('app test', () => {
  it('app snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  }); 
});
