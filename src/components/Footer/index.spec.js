import React from 'react';
import { mount } from 'enzyme';

import Footer from './';

describe('Footer component', () => {
  it('should match snapshot', () => {
    const component = mount(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
