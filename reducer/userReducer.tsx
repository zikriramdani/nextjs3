import { HYDRATE } from "next-redux-wrapper";
import { User } from '../types/User'

const initialState = {
    addUser: true,
    userList: [],
    userEdit: []
};

export const userReducer = ( state = initialState, action ) => {
	switch(action.type){
        // Create
        case 'set-add-user':
			state = {
				...state,
				addUser: true
			}
			return state
		case 'reset-add-user':
			state = {
				...state,
				addUser: false,
                userList: null
			}
			return state
        // Read
		case 'load-user':
            state = {
                ...state,
                userList: action.payload,
            }
            return state
        // Update
        case 'load-user-edit':
            state = {
                ...state,
                userEdit: action.payload
            }
            return state
        case 'load-user-reset-data':
            return initialState
        default:
            return state
	}
}

export default userReducer
