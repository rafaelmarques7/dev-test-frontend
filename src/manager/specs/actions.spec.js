import * as actions from '../actions'

describe('actions', () => {
  it('should create an action to set a filter', () => { 
    const filter = "all";
    const expectedAction = {
      type: actions.SET_BIKES_FILTER,
      payload: filter
    };
    expect(actions.setBikesFilter(filter)).toEqual(expectedAction);
  });

  it('initiates fetch action ', () => {
    const expectedAction = { type: actions.FETCH_BIKES_BEGIN };
    expect(actions.fetchBikesBegin()).toEqual(expectedAction);
  });

  it('terminates fetch action with success', () => {
    const bikes = {}
    const expectedAction = { 
      type: actions.FETCH_BIKES_SUCCESS,
      payload: bikes,  
    };
    expect(actions.fetchBikesSuccess(bikes)).toEqual(expectedAction);
  });

  it('terminates fetch action with an error', () => {
    const error = {}
    const expectedAction = { 
      type: actions.FETCH_BIKES_FAILURE,
      payload: error,  
    };
    expect(actions.fetchBikesFailure(error)).toEqual(expectedAction);
  });


  it('asser that one action is different from another action', () => {
    const filter = "all";
    const expectedAction = {
      type: actions.SET_BIKES_FILTER,
      payload: filter
    };
    expect(actions.fetchBikesFailure(filter)).not.toBe(expectedAction);
  });


  describe('handleErrors function', () => {
    it('handles case where there are NO errors on getting the data', () => {
      const response = { ok: true };
      expect(actions.handleErrors(response)).toEqual(response);
    });

      
    it('handles case where there ARE errors on getting the data', () => {
      const responseText = "some text";
      const response = { ok: false, statusText: responseText };
      function testError() {
        actions.handleErrors(response)
      }
      expect(testError).toThrowError(responseText);
    });
  });

});

