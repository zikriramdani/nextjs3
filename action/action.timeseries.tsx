import axios from 'axios';
import { webConfig } from '../config';

const apiUrl = webConfig.baseUrl.baseUrlChart;

const headers = {
    'x-rapidapi-key': '521b6b5780mshcb7b46c16ffc87ep157cfejsn266ec3f0f34f',
    'x-rapidapi-host': 'gold-price-live.p.rapidapi.com'
}

export const getListTimeseries = () => {
    // console.log('action.timeseries')
    return (dispatch) => {
        // console.log('dispatch')
        return axios.get(apiUrl + 'get_metal_prices', {headers}).then(response => {
            // console.log('axios', response)
            if(response.data) {
                dispatch(saveListTimeseries(response.data))
            }
        })
        .catch(error => {
            console.log('error', error)
            console.log('message: You have exceeded the DAILY quota for Requests on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/ai-box-ai-box-default/api/gold-price-live',)
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