import request from '../index'

// test请求成功
(() => {
  request({ url: 'https://unidemo.dcloud.net.cn/api/news' }).then(res => {
    const exceptRes = {
      status: 200,
      data: {},
      statusText: 'request:ok',
      headers: {},
      config: {},
    }
    if (Object.keys(exceptRes).toString() === Object.keys(res).toString()) {
      console.log('requestSuccess: pass')
    } else {
      console.error('requestSuccess: fail')
    }
  })
})();

// test请求失败
(() => {
  request({
    url: 'https://unidemo.dcloud.net.cn/api/news',
    method: 'post',
  }).catch(err => {
    const exceptErr = new Error('Request failed with status code 405')
    exceptErr.config = {}
    exceptErr.response = {}
    const verifyErrMsg = err.toString().indexOf('Request failed with status code') !== -1
    const verifyErrProps = Object.keys(err).toString() === Object.keys(exceptErr).toString()
    if (verifyErrMsg && verifyErrProps) {
      console.log('requestFail: pass')
    } else {
      console.log('requestFail: fail')
    }
  })
})();

// test请求超时
(() => {
  request({
    url: 'https://unidemo.dcloud.net.cn/api/news',
    timeout: 2,
    method: 'post',
  }).catch(err => {
    const verifyErrMsg = err.toString().indexOf('timeout of') !== -1
    if (verifyErrMsg && err.config !== undefined && err.response === null) {
      console.log('requestTimeout: pass')
    } else {
      console.log('requestTimeout: fail')
    }
  })
})();

// test全局配置
(() => {
  const request1 = request.create({ baseURL: 'https://unidemo.dcloud.net.cn/api' })
  request1({ url: '/news' }).then(res => {
    console.log('globalConfig：pass')
  }).catch(() => {
    console.log('globalConfig：fail')
  })
})();

// 测试拦截器
(() => {
  const request2 = request.create({ baseURL: 'https://unidemo.dcloud.net.cn/api' })
  request2.interceptors.request.use(config => {
    console.log('requestInterceptors：pass')
    return config
  })
  request2.interceptors.response.use(res => {
    console.log('responseInterceptors：pass')
    return res
  })
  request2({ url: '/news' })
})();

// 测试customData
(() => {
  const request3 = request.create({ baseURL: 'https://unidemo.dcloud.net.cn/api' })
  request3.interceptors.request.use(config => {
    if (config.customData.a === 1) {
      console.log('customData: pass')
    } else {
      console.log('customData: fail')
    }
    return config
  })
  request3({
    url: '/news',
    customData: { a: 1 },
  })
})();

// 测试请求参数
(() => {
  request({
    url: '/https://unidemo.dcloud.net.cn/api',
    params: {
      a: null,
      b: 3,
    },
  })
})()
