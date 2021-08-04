const initialState = {
    timeseriesList: {}
};

export const timeseriesReducer = ( state = initialState, action ) => {
	switch(action.type){
        // Read
		case 'load-timeseries':
            state = {
                ...state,
                timeseriesList: action.payload,
            }
            return state
        case 'load-timeseries-reset-data':
            return initialState
        default:
            return state
	}
}

export default timeseriesReducer
