import { paramsToSearch, validateStatus, createError } from './helpers'

const dispatchRequest = (config) => {
  const { baseURL = '', url, params } = config
  return new Promise((resolve, reject) => {
    uni.request({
      ...config,
      url: baseURL + url + paramsToSearch(params),
      complete(res) {
        const { errMsg } = res
        // 接口调用成功
        if (errMsg === 'request:ok') {
          const { statusCode, data, headers } = res
          const response = {
            status: statusCode,
            data,
            statusText: errMsg,
            headers,
            config,
          }
          if (validateStatus(statusCode)) { // 请求成功
            resolve(response)
          } else { // 失败
            reject(createError(`Request failed with status code ${statusCode}`, config, response))
          }
        } else if (errMsg === 'request:fail timeout') { // 请求超时
          reject(createError(`timeout of ${config.timeout || 30000} ms exceeded`, config, null))
        } else { // 接口调用失败
          reject(createError(errMsg, config, null))
        }
      },
    })
  })
}

export default dispatchRequest
