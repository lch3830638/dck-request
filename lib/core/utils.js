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
    str += `${prop}=${params[prop]}`
  })
  return str
}

export { paramsToSearch }
