import Intercepter from './Intercepter'
import dispatchRequest from './dispatchRequest'

class Http {
  static mergeConfig(config, config2) {
    const config2ContainKeys = ['baseURL', 'timeout']
    const configContainKeys = [
      'url', 'baseURL', 'data', 'params', 'header', 'method', 'timeout',
      'dataType', 'responseType', 'sslVerify', 'complete', 'customData',
    ]
    config2ContainKeys.forEach(prop => {
      if (!config[prop] && config2[prop]) {
        config[prop] = config2[prop]
      }
    })
    const result = {}
    Object.keys(config).filter(prop => configContainKeys.includes(prop)).forEach(prop => {
      result[prop] = config[prop]
    })
    result.method = result.method || 'get'
    result.params = result.params || {}
    result.data = result.data || {}
    result.customData = result.customData || {}
    return result
  }

  constructor(defaultConfig = {}) {
    this.defaultConfig = defaultConfig
    this.interceptors = {
      request: new Intercepter(),
      response: new Intercepter(),
    }
  }
  request(config = {}) {
    config = Http.mergeConfig(config, this.defaultConfig)
    const chain = [dispatchRequest, undefined]
    let promise = Promise.resolve(config)
    this.interceptors.request.handlers.forEach(interceptor => {
      chain.unshift(interceptor.fulfilled, interceptor.rejected)
    })
    this.interceptors.response.handlers.forEach(interceptor => {
      chain.push(interceptor.fulfilled, interceptor.rejected)
    })
    while (chain.length > 0) {
      promise = promise.then(chain.shift(), chain.shift())
    }
    return promise
  }
}

export default Http
