/**
 * actions.js
 * File with all the necessary actions to evolve the state of the application.
 * It also declares and exports consts declaring the types of the actions - can be used by reducers.
 */


/**
 * The URL with the data for the application
 */
const bikesUrl = "https://jujhar.com/bikes.json"

/**
 * Declares consts with the name of the actions
 */
export const SET_BIKES_FILTER = "SET_BIKES_FILTER"
export const FETCH_BIKES_BEGIN = "FETCH_BIKES_BEGIN"
export const FETCH_BIKES_SUCCESS = "FETCH_BIKES_SUCCESS"
export const FETCH_BIKES_FAILURE = "FETCH_BIKES_FAILURE"


/** 
 * action to set the visibility filter
*/
export const setBikesFilter = (cat) => ({
  type: SET_BIKES_FILTER,
  payload: cat,
})


/**
 * action to inform that the data request has begun
 */
export const fetchBikesBegin = () => ({
  type: FETCH_BIKES_BEGIN,
});

/**
 * action to inform that the data request was successfull
 */
export const fetchBikesSuccess = (bikes) => ({
  type: FETCH_BIKES_SUCCESS,
  payload: bikes,
});

/**
 * action to inform that the data request encountered an error
 */
export const fetchBikesFailure = (error) => ({
  type: FETCH_BIKES_FAILURE,
  payload: error ,
});


/**  
 * Function to handle errors
*/
export function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

/**
 * Asyn action to load the Bikes data from the API
 * Dispatches 3 actions:
 *    - fetchBikesBegin   - informs user loading has begun 
 *    - fetchBikesSuccess - merge state with received data
 *    - fetchBikesFailure - informs user something went wrong
 */
export function fetchBikes() {
  return dispatch => {
    dispatch(fetchBikesBegin());
    return fetch(bikesUrl)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchBikesSuccess(json))
        return json;
      })
      .catch(error => dispatch(fetchBikesFailure(error)));
  };
}