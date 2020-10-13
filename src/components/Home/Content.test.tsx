import React from 'react';
import Content from './Content';
import { shallow } from 'enzyme';

describe('render Content component', () => {
  it('render a div ', () => {
    const container = shallow(<Content />);
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  })
})