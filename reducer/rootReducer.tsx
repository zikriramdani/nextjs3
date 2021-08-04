import { combineReducers } from 'redux';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    user: userReducer
});

// console.log('rootReducer', rootReducer)

export default rootReducer;