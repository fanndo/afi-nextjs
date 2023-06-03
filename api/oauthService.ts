import axios from 'axios';

const oauthService = axios.create({
    baseURL: process.env.OAUTH_URL
});


export default oauthService;