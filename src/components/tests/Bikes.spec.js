import React from 'react';
import { shallow } from 'enzyme';
import Bikes from '../BikesList';


const bikesProps = {
  categories: [],
  filter: "all",
  loading: false,
  error: null,
};

it('renders without crashing', () => {
  shallow(
    <Bikes {...bikesProps} />
  );
});