import { fromJS } from 'immutable';

export const initialState = fromJS({
  bikes: {},
})

export function rootReducer(state=initialState, action) {
  return state;
}
