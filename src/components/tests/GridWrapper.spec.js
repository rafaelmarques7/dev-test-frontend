import React from 'react';
import { shallow } from 'enzyme';
import GridWrapper from '../GridWrapper';

it('renders without crashing', () => {
  shallow(<GridWrapper />);
});