import { combineReducers } from 'redux';
import app from './app';
import board from './board';

const combinedReducer = combineReducers({
  app,
  board,
});

export default combinedReducer;
