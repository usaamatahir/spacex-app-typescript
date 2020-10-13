import React from 'react';
import App from './App';
import Routiing from './Routing';
import { shallow } from 'enzyme';

describe('Render a App component', () => {
  it('renders learn react link', () => {
    const container = shallow(<App />);
    expect(container.find('div').length).toEqual(1);
  });

  it('render a Routing Component in App', () => {
    const container = shallow(<App />);
    expect(container.containsMatchingElement(<Routiing />)).toEqual(true);
  })
  
})