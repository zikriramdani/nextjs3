import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';

function configureStore(preloadedState) {

	const logger = createLogger()

  	const store = createStore(
    	rootReducer,
    	preloadedState,
    	applyMiddleware(thunk)
  	)

  	return store
}

export default configureStore