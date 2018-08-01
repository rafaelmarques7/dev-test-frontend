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

  it('one action is different from another action', () => {
    const filter = "all";
    const expectedAction = {
      type: actions.SET_BIKES_FILTER,
      payload: filter
    };
    expect(actions.fetchBikesFailure(filter)).not.toBe(expectedAction);
  })
});

