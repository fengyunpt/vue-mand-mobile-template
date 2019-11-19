import axios from "axios";
import { Toast } from 'mand-mobile'
import { getItem, setToken, getToken } from './auth';
import { baseURL } from '../api/base'
import { refreshToken } from '../api/user';


/****** 创建axios实例 ******/
const service = axios.create({
    baseURL: baseURL,  // api的base_url
    timeout: 10000,  // 请求超时时间
    // withCredentials: true
});

/****** request拦截器==>对请求参数做处理 ******/
service.interceptors.request.use(config => {
    Toast.loading('加载中...')
    config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
    config.headers.common['Authorization'] = 'bearer ' + getToken();
    return config;
}, error => {  //请求错误处理
    // Toast.failed(error);
    Promise.reject(error)
});

/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
    response => {  //成功请求到数据
        setTimeout(() => {
            Toast.hide()
        }, 100);
        if (response.data) {
            return response.data;
        }
    },
    error => {  //响应错误处理
        // Toast.failed(error.response.data.message);
        setTimeout(() => {
            Toast.hide()
        }, 100);
        // console.log(location.hash);
        if (error.response) {
            switch (error.response.status) {
                case 401: {
                    refreshToken(getItem('refresh_token')).then(function (res) {
                        // console.log(JSON.stringify(res));
                        if (res && res.status == 200) {
                            setToken(res.data.access_token, res.data.refresh_token);
                            location.reload();
                        }
                    }).catch(function (error) {
                        // console.log(error.response);
                        if (error.response.data.error == 'invalid_grant') {
                            location.hash = "/login";
                        }
                    });
                }
                    return Promise.reject(error)
            }
        }
    }
);
export default service;