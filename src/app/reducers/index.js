import { combineReducers } from 'redux';
import todos from './todo';
import rotate from './rotate';

const rootReducer = () =>
  combineReducers({
    rotate,
    todos,
  });

export default rootReducer;
