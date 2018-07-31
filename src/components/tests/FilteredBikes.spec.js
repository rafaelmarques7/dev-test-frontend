import React from 'react';
import { shallow } from 'enzyme';
import FilterBikes from '../FilterBikes';

it('renders without crashing', () => {
  shallow(<FilterBikes />);
});