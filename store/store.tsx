// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunkMiddleware from 'redux-thunk'
// import {userReducer} from '../reducer/userReducer'
// // import { reducer as somethingReducer } from './states/something/reducer'

// export const initStore = (initialState) => {
//   return createStore(combineReducers({
//     userReducer: userReducer,
//     // something: somethingReducer
//   }), initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
// }

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducer/rootReducer';

const initialState = {};
const middleware = [thunkMiddleware];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

console.log('store', createStore(rootReducer))

export default store;