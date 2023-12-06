// import { createStore } from "redux";
// import rotateReducer from "../../app/reducers/rotate";

// function configureStore(state = { rotating: true }) {
//   return createStore(rotateReducer,state);
// }

// export default configureStore;

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import axios from 'axios';
import rotateReducer from '../reducers/rotate';
import rootReducer from '../reducers';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
export const history = createBrowserHistory();

export default (req) => {
  let store = '';
  const middlewares = [thunkMiddleware, routerMiddleware(history)];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  store = createStore(rootReducer(), {}, composeWithDevTools(...enhancers));
  console.log('State Set', store.getState());
  return store;
};
