import { userReducer } from '../reducer/userReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    user: userReducer
});