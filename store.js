import axios from 'axios'

const instance = axios.create({
    baseURL: `http://localhost:6768/api`
})

export default instance

// import { createStore, applyMiddleware } from 'redux'
// // import createSagaMiddleware from 'redux-saga'
// import { createLogger } from 'redux-logger'
// import rootReducer from './Reducers'
// // import { helloSaga } from './Sagas/dogSaga'
// import thunk from 'redux-thunk'
// function configureStore(preloadedState) {

// 	const logger = createLogger()
//   	// const sagaMiddleware = createSagaMiddleware()

//   	const store = createStore(
//     	rootReducer,
//     	preloadedState,
//     	applyMiddleware(thunk)
//   	)
//   	// store.sagaTask = sagaMiddleware.run(helloSaga)

//   	return store
// }

// export default configureStore