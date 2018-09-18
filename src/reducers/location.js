import { CHANGE_LOCATION } from '../actions';

export default function locationReducer(state = 'Seattle, WA', action) {
  if (action.type === CHANGE_LOCATION) {
    return action.payload;
  }
  return state;
}