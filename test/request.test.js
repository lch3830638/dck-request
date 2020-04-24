import request from '../index'

// test基本请求
(() => {
  request({ url: 'https://unidemo.dcloud.net.cn/api/news' }).then(res => {
    console.log('baseRequest：success')
  }).catch(() => {
    console.log('baseRequest：fail')
  })
})();

// test全局配置
(() => {
  const request1 = request.create({ baseURL: 'https://unidemo.dcloud.net.cn/api' })
  request1({ url: '/news' }).then(res => {
    console.log('globalConfig：success')
  }).catch(() => {
    console.log('globalConfig：fail')
  })
})();

// 测试拦截器
(() => {
  const request2 = request.create({ baseURL: 'https://unidemo.dcloud.net.cn/api' })
  request2.interceptors.request.use(config => {
    console.log('requestInterceptors：success')
    return config
  })
  request2.interceptors.response.use(res => {
    console.log('responseInterceptors：success')
    return res
  })
  request2({ url: '/news' })
})();

// 测试customData
(() => {
  const request3 = request.create({ baseURL: 'https://unidemo.dcloud.net.cn/api' })
  request3.interceptors.request.use(config => {
    if (config.customData.a === 1) {
      console.log('customData: success')
    } else {
      console.log('customData: fail')
    }
    return config
  })
  request3({
    url: '/news',
    customData: { a: 1 },
  })
})()
