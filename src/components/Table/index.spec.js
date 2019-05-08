import React from 'react';
import { mount } from 'enzyme';

import Table from './';

const colDefs = ['Test Column 1', 'Test Column 2'];

const rowData = [
  {
    col1: 'Row 1 Column 1',
    col2: 'Row 1 Column 2'
  },
  {
    col1: 'Row 2 Column 1',
    col2: 'Row 2 Column 2'
  }
];

describe('Table component', () => {
  describe('When required props are empty', () => {
    it('should match snapshot', () => {
      const component = mount(<Table colDefs={[]} rowData={[]} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('When required props are complete', () => {
    it('should match snapshot', () => {
      const component = mount(<Table colDefs={colDefs} rowData={rowData} />);
      expect(component).toMatchSnapshot();
    });
  });
});
