// returns an Array of all unique categories 
export const getAllCategories = (state) => {
  var categories = [];
  state.bikes.items.filter(function(bike) {
    bike.class.forEach(cat => {
      if (categories.indexOf(cat) === -1) {
        categories.push(cat)  
      }
    })
  });
  return categories;
}

// returns an Array of the items which match the filter
export const getFilteredBikes = (state, category) => {
  // if the filter is set to "all" return the entire bikesarray
  if (category === "all") {
    return state.bikes.items;
  }
  // otherwise, filter by category
  var filtered_bikes = [];
  state.bikes.items.filter((bike) => {
    bike.class.forEach(cat => {
      if (cat === category && filtered_bikes.indexOf(bike) === -1) {
        filtered_bikes.push(bike)
      }
    })
  });
  return filtered_bikes;
}

