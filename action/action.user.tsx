import axios from 'axios';
import { webConfig } from '../config';

const apiUrl = webConfig.baseUrl.baseUrlProd;

export const getListUser = () => {
    // console.log('action.user')
    return (dispatch) => {
        // console.log('dispatch')
        return axios.get(apiUrl + 'users').then(response => {
            // console.log('axios', response.data.data)
            if(response.data.data) {
                dispatch(saveListUser(response.data.data))
            }
        })
    }
};

// Create
// export const setAddUser = () => {
// 	return {
// 		type: 'set-add-user'
// 	}
// }

// export const resetAddUser = () => {
// 	return {
// 		type: 'reset-add-user'
// 	}
// }

// Read
export const saveListUser =(payload) => {
    return {
        type: 'load-user',
        payload: payload
    };
};

// Update
// export const saveUserEdit = (payload) => {
// 	return {
// 		type : 'load-user-edit',
// 		payload: payload
// 	}
// }