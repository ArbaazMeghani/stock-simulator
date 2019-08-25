import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import authReducer from './authReducer';
import tokenReducer from './tokenReducer';

export default combineReducers({
  simpleReducer,
  authReducer,
  tokenReducer
});