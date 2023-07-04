import axios from 'axios'
import { ref } from 'vue'
let config = {
    baseURL: 'api/', //基本地址，后面所有的url都会在此路径上拼接
    timeout: 60 * 1000, // 超时(最长请求时间)
    withCredentials: true
};
const _axios = axios.create(config);
//请求前处理
_axios.interceptors.request.use(
    function (config) {

        // config.headers.Authorization = "Bearer " + localStorage.getItem("Token");
        return config
    },
    function (error) {
        return Promise.reject(error);
    }
);
// 响应后处理
_axios.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

const getAxios = (url, params, succ, fail) => {
    _axios({
        url,
        method: 'get',
        async: false,
        params,
    }).then(res => {
        if (res.success == true) {
            succ && succ(res)
        } else {
            fail && fail(res)
        }

    }).catch(err => {
        console.log('axios请求错误', err);
    })
}
const postAxios = (url, data = {}, succ, fail) => {
    _axios({
        url,
        method: 'post',
        data
    }).then(res => {
        if (res.success == true) {
            success && success(res)
        }
    }).catch((err) => {
        console.log('axios请求返回异常结果', err);
    })
}


export default function useAxios() {
    // 在这里定义你的 hook 逻辑
    // 使用 ref 创建一个响应式变量
    const axiosGet = ref(getAxios);
    const axiosPost = ref(postAxios);

    // 返回需要暴露给组件使用的数据和方法
    return {
        axiosGet,
        axiosPost,
    };
}