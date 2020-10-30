const isObject = (param) => {
  return Object.prototype.toString.call(param) === '[object Object]'
}

// 将params转换查询字符串
const paramsToSearch = (params) => {
  let str = ''
  if (!params || !isObject(params)) {
    return str
  }
  Object.keys(params).forEach((prop, i) => {
    i === 0 ? str += '?' : str += '&'
    str += `${prop}=${params[prop] || ''}`
  })
  return str
}

// 验证返回状态
const validateStatus = status => {
  return status >= 200 && status < 300
}

// 创建Error
const createError = (message, config, response) => {
  const err = new Error(message)
  err.config = config
  err.response = response
  return err
}

export {
  paramsToSearch,
  validateStatus,
  createError,
}
