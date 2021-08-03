import { combineReducers } from 'redux'
import { vuroxCompanyInfo } from './articles'

const rootReducer = combineReducers({
	company: vuroxCompanyInfo,
})
export default rootReducer;