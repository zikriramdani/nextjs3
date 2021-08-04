import axios from 'axios';
import { webConfig } from '../config';

const apiUrl = webConfig.baseUrl.baseUrlProd;

export const getListUser = () => {
    console.log('action.user')
    return (dispatch) => {
        console.log('dispatch')
        return axios.get(apiUrl).then(response => {
            console.log('axios', response.data.data)
            if(response.data.data) {
                dispatch(saveListUser(response.data.data))
            }
        })
    }
};

export const saveListUser =(payload) => {
    return {
        type: 'load-user',
        payload: payload
    };
};