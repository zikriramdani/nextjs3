import axios from 'axios';
import { webConfig } from '../config';

const apiUrl = webConfig.baseUrl.baseUrlProd;

export const getListUser = () => {
    return (dispatch, getState) => {
        axios.get(apiUrl).then((dataUser) => {
            // if(dataUser.data) {
            //     dispatch(saveListUser(dataUser.data))
            // }
        });
    };
};

export const saveListUser =(payload) => {
    return {
        type: 'load-revenue-report',
        payload: payload
    };
};