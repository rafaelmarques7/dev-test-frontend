import { initialState } from '../reducers';
import { rootReducer as reducer } from '../reducers';
import {
  FETCH_BIKES_BEGIN,
  FETCH_BIKES_SUCCESS,
  FETCH_BIKES_FAILURE,
  SET_BIKES_FILTER,
} from '../actions';


describe('rootReducer', () => {
  
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('fetchBikesBeing', () => {
    const action = { type: FETCH_BIKES_BEGIN };
    var expectedState = Object.assign({}, initialState); 
    
    it('handles the setting of the load property', () => {
      expectedState.loading = true; 
      expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('handles the setting of the error property', () => {
      var state = Object.assign({}, initialState); 
      state.error = true, 
      expectedState.error = null; 
      expect(reducer(state, action)).toEqual(expectedState);
    });
  });

  describe('fetchBikesSuccess', () => {
    const payload = { 
      bikes: { items: ["bike_1", "bike_2"] }
    };
    const action = { 
      type: FETCH_BIKES_SUCCESS,
      payload: payload 
    };
    var expectedState = Object.assign({}, initialState); 

    it('handles the setting of the bikes data', () => {
      expectedState.bikes = payload; 
      expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('handles the setting of the loading property', () => {
      var state = Object.assign({}, initialState); 
      state.loading = true;
      expectedState.loading = false,
      expect(reducer(state, action)).toEqual(expectedState)
    });
  });

  describe('fetchBikesFailure', () => {
    const payload = { message: "some text" };
    const action = { 
      type: FETCH_BIKES_FAILURE,
      payload: payload 
    };
    var expectedState = Object.assign({}, initialState); 

    it('handles the setting of the error property', () => {
      expectedState.error = payload; 
      expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('handles the setting of the loading property', () => {
      var state = Object.assign({}, initialState); 
      state.loading = true;
      expectedState.loading = false,
      expect(reducer(state, action)).toEqual(expectedState)
    });
  });

  it('sets the visibility filter', () => {
    const filter = "some_category";
    const action = {
      type: SET_BIKES_FILTER,
      payload: filter
    };
    var expectedState = Object.assign({}, initialState); 
    expectedState.filter = filter;
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});