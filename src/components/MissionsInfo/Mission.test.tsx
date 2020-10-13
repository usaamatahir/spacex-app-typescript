import React from 'react';
import { shallow } from 'enzyme';
import Mission from './index';

describe('Render a Mission Component', () => {
  it('render a div ', () => {
    const container = shallow(<Mission />);
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  })
})