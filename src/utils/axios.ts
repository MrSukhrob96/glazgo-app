import axios from "axios";

const APP_API = 'http://localhost:8000';

const httpApi = axios.create({
    baseURL: APP_API,
    headers: {
        "Accept": "application/json",
        "Content-type": "application/json; charset=utf-8",
        "cache-control": "no-cache, private",
    },
    withCredentials: true,
});

export default httpApi;