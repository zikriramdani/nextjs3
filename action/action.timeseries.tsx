import axios from 'axios';
import { webConfig } from '../config';

const apiUrl = webConfig.baseUrl.baseUrlChart;

var headers = {
    'x-rapidapi-key': 'caa48952d3mshb095a26cccdcdbcp1e39bajsn6589c19645f9',
    'x-rapidapi-host': 'gold-price-live.p.rapidapi.com'
}

export const getListTimeseries = () => {
    console.log('action.timeseries')
    return (dispatch) => {
        // console.log('dispatch')
        return axios.get(apiUrl + 'get_metal_prices', {headers}).then(response => {
            // console.log('axios', response)
            if(response.data) {
                dispatch(saveListTimeseries(response.data))
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