import axios from "axios";

import {LoaderAction} from './../redux/actions/loaderAction';
import store from './../redux/store';
 const axiosInstance = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie",
    params:{
        api_key: process.env.REACT_APP_API_KEY,
        language:"en-US",
        page:1
    }
})

 axiosInstance.interceptors.request.use(
    function (config) {
        store.dispatch(LoaderAction(true))
        return config;
    },function (error) {
        return Promise.reject(error);
    }
 )

 axiosInstance.interceptors.response.use(
    function (res) {
       store.dispatch(LoaderAction(false)) 
        return res;
    },function (error) {
        return Promise.reject(error);
    }
 )


export default axiosInstance;