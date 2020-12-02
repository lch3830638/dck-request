function isDate(val) {
  return toString.call(val) === '[object Date]'
}

function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]'
}

function isArray(val) {
  return toString.call(val) === '[object Array]'
}

function isEmpty(val) {
  return val === undefined || val === null
}

function forEach(obj, fn) {
  if (isEmpty(obj)) {
    return
  }

  if (typeof obj !== 'object') {
    obj = [obj]
  }

  if (isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      fn(obj[i], i, obj)
    }
  } else {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn(obj[key], key, obj)
      }
    }
  }
}

export default {
  isDate,
  isObject,
  isArray,
  isEmpty,
  forEach,
}
