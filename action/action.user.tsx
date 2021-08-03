import axios from 'axios';
import { webConfig } from '../config';

const apiUrl = webConfig.baseUrl.baseUrlProd;

export const getListUser = () => {
    return (dispatch, getState) => {
        axios.get(apiUrl).then((dataUser) => {
            console.log('ad', dataUser)
            // if(dataUser.data) {
            //     dispatch(saveListUser(dataUser.data))
            // }
        });
    };
};

export const saveListUser =(payload) => {
    return {
        type: 'load-user',
        payload: payload
    };
};