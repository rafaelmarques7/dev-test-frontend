import React from 'react';
import { 
  getAllCategories, 
  getFilteredBikes 
} from '../selectors';


// set a default state to test the selectors
const defState = {
  bikes: {
    items: [
      {
        "name": "Bike_1",
        "class": ["Class_1", "Class_2"],
      },
      {
        "name": "Bike_2",
        "class": ["Class_1", "Class_3"]
      }
    ]
  }
}


// unit test for "getAllCategories()"
it('selects all categories without repeating them', () => {
  const categories = getAllCategories(defState);
  const expectedCategories = ["Class_1", "Class_2", "Class_3"];
  expect(expectedCategories).toEqual(categories); 
});


// unit test for "getFilteredBikes()"
it('selects/filters the bikes  according to the selectod category', () => {
  var category = "Class_2";
  var filteredBikes = getFilteredBikes(defState, category);
  var expectedBikes = [{
    "name": "Bike_1", 
    "class": ["Class_1", "Class_2"]
  }];
  expect(expectedBikes).toEqual(filteredBikes);

  var category = "Class_1";
  var filteredBikes = getFilteredBikes(defState, category);
  var expectedBikes = [{
    "name": "Bike_1", "class": ["Class_1", "Class_2"]
  }, {
    "name": "Bike_2", "class": ["Class_1", "Class_3"]
  }];
  expect(expectedBikes).toEqual(filteredBikes);

  var category = "all";
  var filteredBikes = getFilteredBikes(defState, category);
  expect(filteredBikes).toEqual(defState.bikes.items);
});