import axios from 'axios';
import { webConfig } from '../config';

const apiUrl = webConfig.baseUrl.baseUrlProd;

// Read
export const getListUser = () => {
    // console.log('action.user getListUser')
    return (dispatch) => {
        // console.log('dispatch getListUser')
        return axios.get(apiUrl + 'users').then(response => {
            // console.log('axios getListUser', response.data)
            if(response.data) {
                dispatch(saveListUser(response.data))
            }
        })
    }
};

// Delete
export const deleteUser = (userId) => {
    // console.log('action.user deleteUser')
	return (dispatch) =>{
        console.log('dispatch deleteUser')
		return axios.delete(apiUrl + 'users/' + userId).then(response => {
            // console.log('response', response)
			if(response.status == 200){
				dispatch(getListUser())
			}
		})
	}
}

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