import { combineReducers } from 'redux';
import app from './app';

const combinedReducer = combineReducers({
  app,
});

export default combinedReducer;
