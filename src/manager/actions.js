// The Url for the bikes data
const bikesUrl = "https://jujhar.com/bikes.json"


// Constant action names
export const SET_BIKES_FILTER = "SET_BIKES_FILTER"
export const FETCH_BIKES_BEGIN = "FETCH_BIKES_BEGIN"
export const FETCH_BIKES_SUCCESS = "FETCH_BIKES_SUCCESS"
export const FETCH_BIKES_FAILURE = "FETCH_BIKES_FAILURE"


// action to set the visibility filter
export const setBikesFilter = (cat) => ({
  type: SET_BIKES_FILTER,
  payload: cat,
})


// load, success and failure actions
export const fetchBikesBegin = () => ({
  type: FETCH_BIKES_BEGIN,
});


export const fetchBikesSuccess = (bikes) => ({
  type: FETCH_BIKES_SUCCESS,
  payload: bikes,
});


export const fetchBikesFailure = (error) => ({
  type: FETCH_BIKES_FAILURE,
  payload: error ,
});


// Function to handle errors
export function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

// Async action to load bikes data
export function fetchBikes() {
  console.log("fetchBikes was called")
  return dispatch => {
    // dispatch action to inform loading has begun
    console.log("inside dispatch of fetchbikes")
    dispatch(fetchBikesBegin());
    // try to load the data
    return fetch(bikesUrl)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        console.log("dispatching success")
        dispatch(fetchBikesSuccess(json))
        return json;
      })
      .catch(error => dispatch(fetchBikesFailure(error)));
  };
}


