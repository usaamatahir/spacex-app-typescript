import React from 'react';
import Home from './Home';
import Content from './Content';
import Slider from './Slider';
import { shallow } from 'enzyme';

describe('render Index component', () => {
  it('render a div ', () => {
    const container = shallow(<Home />);
    expect(container.find('div').length).toEqual(1);
  })

  it('render slider component', () => {
    const container = shallow(<Home />);
    expect(container.containsMatchingElement(<Slider />)).toEqual(true);
  })

  it('render slider component', () => {
    const container = shallow(<Home />);
    expect(container.containsMatchingElement(<Content />)).toEqual(true);
  })
})