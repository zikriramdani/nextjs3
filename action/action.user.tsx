import axios from 'axios';
import { webConfig } from '../config';

const apiUrl = webConfig.baseUrl.baseUrlProd;

export const getListUser = () => {
    console.log('actions')
    return (dispatch) => {
        axios.get(apiUrl)
        .then(dataUser =>{
            console.log('actionss', dataUser.data)
            if(dataUser.data) {
                dispatch(saveListUser(dataUser.data))
            }
        })
    };
};

export const saveListUser =(payload) => {
    return {
        type: 'load-user',
        payload: payload
    };
};