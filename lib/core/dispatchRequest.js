import { paramsToSearch } from './utils'

const dispatchRequest = (config) => {
  const { baseURL = '', url, params } = config
  config.url = baseURL + url + paramsToSearch(params)
  return new Promise((resolve, reject) => {
    uni.request({
      ...config,
      success: (res) => {
        resolve(res)
      },
      fail(e) {
        reject(e)
      },
    })
  })
}

export default dispatchRequest
