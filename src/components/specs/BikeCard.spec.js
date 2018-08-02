import React from 'react';
import { shallow } from 'enzyme';
import BikeCard from '../BikeCard';


const bikeCardProps = {
  id: 0,
  name: "bike",
  description: "some bike",
  categories: ["some_category"],
  imageSmall: "some_string",
  imageLarge: "some_string"
};

it('renders without crashing', () => {
  shallow(
    <BikeCard {...bikeCardProps} />
  );
});