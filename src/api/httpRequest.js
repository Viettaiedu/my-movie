import axios from 'axios';
import apiConfig from './apiConfig';
export const httpRequest = axios.create({
    baseURL: apiConfig.baseUrl,
});

const get = async (url, options = {}) => {
    const res = await httpRequest.get(url, options);

    return res;
};

export default get;