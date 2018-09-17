import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

// for redux dev tools
const reduxDevTools = typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

const store = createStore(reducer, compose(applyMiddleware(thunk), reduxDevTools));

export default store;