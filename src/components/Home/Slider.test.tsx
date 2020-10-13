import React from 'react';
import Slider from './Slider';
import { shallow } from 'enzyme';

describe('render Content component', () => {
  it('render a div ', () => {
    const container = shallow(<Slider />);
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  })
})