import React from 'react';
import { shallow } from 'enzyme';
import Rockets from './index';

describe('Render a Rockets Component', () => {
  it('render a div ', () => {
    const container = shallow(<Rockets />);
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  })
})