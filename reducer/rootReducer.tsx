import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { timeseriesReducer } from './timeseriesReducer'

export const rootReducer = combineReducers({
    user: userReducer,
    timeseries: timeseriesReducer
});

// console.log('rootReducer', rootReducer)

export default rootReducer;