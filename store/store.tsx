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

import { createStore } from 'redux';
import { rootReducer } from './index';

const store = createStore(rootReducer);

export default store;