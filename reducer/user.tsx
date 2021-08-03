import { USERINFO } from '../action/constants'

const initialState = {
	sales: [
		{date: '01 FEB 2020', value: 1200},
		{date: '05 FEB 2020', value: 3000},
		{date: '10 FEB 2020', value: 2000},
		{date: '15 FEB 2020', value: 2780},
		{date: '20 FEB 2020', value: 1890},
		{date: '25 FEB 2020', value: 2390},
		{date: '29 FEB 2020', value: 3490},
		{date: '01 MAR 2020', value: 6490},
		{date: '02 MAR 2020', value: 4490},
	],
}

export const vuroxUserInfo = ( state = initialState, action ) => {
	switch(action.type){
		case 'TOTAL_SALES': {
			return{
				...state,
				sales: action.payload
			}
		}
	}
	return state
}