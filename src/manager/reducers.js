/**
 * reducer.js
 * This file contains the main reducer and its unit functions
 * which manage the state of the applications.
 * It also contains the initiialState of the app.
 */

import {
  FETCH_BIKES_BEGIN,
  FETCH_BIKES_SUCCESS,
  FETCH_BIKES_FAILURE,
  SET_BIKES_FILTER,
} from './actions';


/**
 * Declare the initial state of the app
 */
export const initialState = {
  // place holder for the bikes data
  bikes: {
    items: []
  },
  // used to inform if the request is pending
  loading: false,
  // used to inform if there are errors 
  error: null,
  // used to decide which bikes to show
  filter: "all",   
};


/** 
 * rootReducer - handles all the state transitions
*/
export function rootReducer(state=initialState, action) {
  switch(action.type){
    case FETCH_BIKES_BEGIN:
      return setBikesBegin(state);
    case FETCH_BIKES_SUCCESS:
      return setBikesSuccess(state, action);
    case FETCH_BIKES_FAILURE:
      return setBikesFailure(state, action);
    case SET_BIKES_FILTER:
      return setBikesFilter(state, action);
    default:  
      return state;
  }
}


/** 
 * sets loading to true, and error to falsy
*/
const setBikesBegin = (state) => {
  return {
    ...state,
    loading: true,
    error: null,
  }
}

/** 
 * merges the loaded data to the state, sets loading to false
*/
const setBikesSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    bikes: action.payload,
  } 
}

/** 
 * merges the error information to the state, sets loading to false
*/
const setBikesFailure = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.payload
  }
}

/** 
 * Sets the visibility filter 
*/
const setBikesFilter = (state, action) => {
  return {
    ...state,
    filter: action.payload
  }
}