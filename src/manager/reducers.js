import {
  FETCH_BIKES_BEGIN,
  FETCH_BIKES_SUCCESS,
  FETCH_BIKES_FAILURE,
  SET_BIKES_FILTER,
} from './actions';


// Construct initial state
export const initialState = {
  bikes: {
    items: []
  },
  loading: false,
  error: null,
  filter: "all",    // this is called filter but could be called "show" as it determines what to display
};


// Main function - handles all the state transitions
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


// Sets loading to true
const setBikesBegin = (state) => {
  return {
    ...state,
    loading: true,
    error: null,
  }
}

// Sets loaded data to the state; Sets loading to false
const setBikesSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    bikes: action.payload,
  } 
}

// Sets the received error;
const setBikesFailure = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.payload
  }
}

// Sets the visibility filter 
const setBikesFilter = (state, action) => {
  return {
    ...state,
    filter: action.payload
  }
}