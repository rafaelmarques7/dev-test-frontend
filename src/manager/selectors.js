/** 
 * selectors.js
 * This file declares the selectors, 
 * which are used to obtain the necessary information from the state.
*/

/** 
 * Returns an Array of all unique categories 
*/
export const getAllCategories = (state) => {
  var categories = [];
  state.bikes.items.forEach((bike) => {
    bike.class.forEach(cat => {
      if (categories.indexOf(cat) === -1) {
        categories.push(cat)  
      }
    })
  });
  return categories;
}


/**
 * Returns an array of the items which match the filter;
 * if the filter is set to "all" return the entire bikes array;
 * otherwise filter by the selected category;
 */
export const getFilteredBikes = (state, category) => {
  if (category === "all") {
    return state.bikes.items;
  }
  var filtered_bikes = [];
  state.bikes.items.forEach((bike) => {
    bike.class.forEach(cat => {
      if (cat === category && filtered_bikes.indexOf(bike) === -1) {
        filtered_bikes.push(bike)
      }
    })
  });
  return filtered_bikes;
}


/** 
 * Returns the currently selected filter
 */
export const getCurrentFilter = (state) => {
  return state.filter
}