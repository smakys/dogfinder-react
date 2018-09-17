import { combineReducers } from 'redux'; // helper function
import location from './location';
import animal from './animal';
import breed from './breed';
import breeds from './breeds';

/*
state = { location: 'San Francisco, CA' } // previous state
action = { type: 'SET_LOCATION', payload: 'San Francisco, CA' } // new action

// this delegates to other reducers
const rootReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return location(state, action);
      break;
  }
};

*/

export default combineReducers({
  location,
  animal,
  breed,
  breeds
});