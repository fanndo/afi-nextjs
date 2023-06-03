import axios from 'axios';

const productoresControllerApi = axios.create({
    baseURL: process.env.PRODUCTORES_URL
});


export default productoresControllerApi;