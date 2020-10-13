import React from 'react';
import { shallow } from 'enzyme';
import Ships from './index';

describe('Render a Ships Component', () => {
  it('render a div ', () => {
    const container = shallow(<Ships />);
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  })
})