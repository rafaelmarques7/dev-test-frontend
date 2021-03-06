import React from 'react';
import { initialState } from '../reducers';
import { 
  getAllCategories, 
  getFilteredBikes, 
  getCurrentFilter
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
describe('getAllCategories', () => {
  it('selects all categories without repeating them', () => {
    const categories = getAllCategories(defState);
    const expectedCategories = ["Class_1", "Class_2", "Class_3"];
    expect(expectedCategories).toEqual(categories); 
  });
  
  it('returns empty array if no data exists', () => {
    const categories = getAllCategories(initialState);
    const expectedCategories = [];
    expect(categories).toEqual(expectedCategories);
  });
});


// unit test for "getFilteredBikes()"
describe('getFilteredBikes', () => {
  it('selects/filters the bikes according to the selectod category', () => {
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
});


// unit test for "getCurrentFilter"
it('retrives the currently selected filter', () => {
  var state = { "filter": "all" };
  var currentFilter = getCurrentFilter(state);
  expect(currentFilter).toEqual("all");
})