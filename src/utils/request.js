import axios from 'axios'
const isHttpProxy =
  import.meta.env.DEV && import.meta.env.VITE_HTTP_PROXY === 'Y'
// console.log('isHttpProxy', isHttpProxy)

const baseURL = import.meta.env.VITE_APP_BASE_API
console.log('baseURL', baseURL)
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL,
  // 超时
  timeout: 30000,
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log(error)
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    // 未设置状态码则默认成功状态
    const code = res.status || 200

    if (code === 200) {
      return res.data
    } else {
      return Promise.reject(res.data.msg)
    }
  },
  (error) => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
