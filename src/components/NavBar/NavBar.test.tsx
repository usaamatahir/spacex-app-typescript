import React from 'react';
import NavBar from './NavBar';
import { shallow } from 'enzyme';

describe('render a NavBar Component', () => {
  it('render a navBar Class', () => {
    const container = shallow(<NavBar />);
    expect(container.find('.navBar').length).toEqual(1);
    expect(container.find('.logo').length).toEqual(1);
    expect(container.find('.logoImg').length).toEqual(1);
    expect(container.find('.Nav').length).toEqual(1);
    expect(container.find('.navList').length).toEqual(4);
    expect(container.find('.menuIcon').length).toEqual(1);
  })


})