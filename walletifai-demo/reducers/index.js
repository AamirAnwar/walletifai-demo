import {combineReducers} from 'redux';
import ReducerUser from './ReducerUser';

const rootReducer = combineReducers({
  user:ReducerUser,
});

export default rootReducer;