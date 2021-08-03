const initialState = [];

export const userReducer = ( state = initialState, action ) => {
	switch(action.type){
		case 'load-user':
            state = {
                ...state,
                user: action.payload,
            }
            return state
        case 'load-user-reset-data':
            return initialState
        default:
            return state
	}
}
