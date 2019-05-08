import React from 'react';
import { mount } from 'enzyme';

import Header from './';

describe('Header component', () => {
  it('should match snapshot', () => {
    const component = mount(<Header />);
    expect(component).toMatchSnapshot();
  });
});
