import axios from 'axios';
import { useNavigate } from "react-router-dom";

//Axios Base Url
// const axiosAuth = axios.create({
//     withCredentials: true,
//     baseURL: process.env.REACT_APP_SERVER_URL
// });

const axiosAuth = axios.create({
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    baseURL: process.env.REACT_APP_SERVER_URL
});

//Axios Request
axiosAuth.interceptors.request.use(
    async (config) => {
        return config;
    }, (error) => {
        return Promise.reject(error)
    });

axiosAuth.interceptors.response.use(
    async (response) => {
        return response;
    }, (error) => {
        const errorMessage = error.response?.data?.message;
        if (errorMessage && errorMessage.startsWith('INVALID_AUTHORIZATION_TOKEN')) {
            LogOut();
        }
        if (error?.response?.status === 401) {
            LogOut();
        }
        return Promise.reject(error);
    });

function LogOut() {

    const navigate = useNavigate();

    if (localStorage.getItem('items')) {
        localStorage.removeItem('items');
        navigate('/');
    }
}

export default axiosAuth;