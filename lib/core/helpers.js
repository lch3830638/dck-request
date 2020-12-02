import utils from '../utils'

function encode(val) {
  return encodeURIComponent(val)
    .replace(/%40/gi, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

// 将params转换查询字符串
export const paramsToSearch = (params) => {
  let result = ''

  if (!params || !utils.isObject(params)) {
    return result
  }

  const parts = []
  utils.forEach(params, (val, key) => {
    if (utils.isEmpty(val)) {
      return
    }

    if (utils.isArray(val)) {
      key = key + '[]'
    } else {
      val = [val]
    }

    utils.forEach(val, (v) => {
      if (utils.isDate(v)) {
        v = v.toISOString()
      } else if (utils.isObject(v)) {
        v = JSON.stringify(v)
      }
      parts.push(encode(key) + '=' + encode(v))
    })
  })

  result += parts.join('&')
  result = (parts.length ? '?' : '') + result

  return result
}

// 验证返回状态
export const validateStatus = status => {
  return status >= 200 && status < 300
}

// 创建Error
export const createError = (message, config, response) => {
  const err = new Error(message)
  err.config = config
  err.response = response
  return err
}
