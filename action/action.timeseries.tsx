import axios from 'axios';
import { webConfig } from '../config';

const apiUrl = webConfig.baseUrl.baseUrlChart;

export const getListTimeseries = () => {
    console.log('action.timeseries')
    return (dispatch) => {
        // console.log('dispatch')
        return axios.get(apiUrl + 'get_metal_prices').then(response => {
            // console.log('axios', response.data.data)
            if(response.data.data) {
                dispatch(saveListTimeseries(response.data.data))
            }
        })
    }
};

// Read
export const saveListTimeseries =(payload) => {
    return {
        type: 'load-timeseries',
        payload: payload
    };
};