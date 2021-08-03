import { combineReducers } from 'redux'
import { vuroxUserInfo } from './user'

const rootReducer = combineReducers({
	user: vuroxUserInfo
})
export default rootReducer;