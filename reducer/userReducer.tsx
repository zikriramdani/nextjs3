import { HYDRATE } from "next-redux-wrapper";
import { User } from '../types/User'

const initialState = {
    userList: [],
};

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
