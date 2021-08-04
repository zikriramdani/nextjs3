import { User } from '../types/User'
// import * as announcementActions from './actions'

const initialState = [];

export const userReducer = ( state = initialState, action ) => {
	switch(action.type){
		case 'load-user':
            state = {
                ...state,
                userList: action.payload,
            }
            return state
        case 'load-user-reset-data':
            return initialState
        default:
            return state
	}
}

export default userReducer
