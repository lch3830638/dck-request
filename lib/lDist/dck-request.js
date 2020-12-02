(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dckRequest"] = factory();
	else
		root["dckRequest"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const createInstance = (config = {}) => {
  const context = new _core_Http__WEBPACK_IMPORTED_MODULE_0__["default"](config)
  const instance = _core_Http__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.request.bind(context)
  Object.keys(context).forEach(val => {
    instance[val] = context[val]
  })
  return instance
}

const request = createInstance()

request.create = (globalConfig) => {
  return createInstance(globalConfig)
}

/* harmony default export */ __webpack_exports__["default"] = (request);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Intercepter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _dispatchRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



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
    return result
  }

  constructor(defaultConfig = {}) {
    this.defaultConfig = defaultConfig
    this.interceptors = {
      request: new _Intercepter__WEBPACK_IMPORTED_MODULE_0__["default"](),
      response: new _Intercepter__WEBPACK_IMPORTED_MODULE_0__["default"](),
    }
  }
  request(config = {}) {
    config = Http.mergeConfig(config, this.defaultConfig)
    const chain = [_dispatchRequest__WEBPACK_IMPORTED_MODULE_1__["default"], undefined]
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

/* harmony default export */ __webpack_exports__["default"] = (Http);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Intercepter {
  constructor() {
    this.handlers = []
  }
  use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected,
    })
    return this.handlers.length - 1
  }
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null
    }
  }
  forEach(fn) {
    this.handlers.forEach(i => {
      if (i) {
        fn(i)
      }
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Intercepter);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


const dispatchRequest = (config) => {
  const { baseURL = '', url, params } = config
  return new Promise((resolve, reject) => {
    uni.request({
      ...config,
      url: baseURL + url + Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["paramsToSearch"])(params),
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
          if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["validateStatus"])(statusCode)) { // 请求成功
            resolve(response)
          } else { // 失败
            reject(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createError"])(`Request failed with status code ${statusCode}`, config, response))
          }
        } else if (errMsg === 'request:fail timeout') { // 请求超时
          reject(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createError"])(`timeout of ${config.timeout || 30000} ms exceeded`, config, null))
        } else { // 接口调用失败
          reject(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createError"])(`request:fail`, config, null))
        }
      },
    })
  })
}

/* harmony default export */ __webpack_exports__["default"] = (dispatchRequest);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paramsToSearch", function() { return paramsToSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateStatus", function() { return validateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createError", function() { return createError; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


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
const paramsToSearch = (params) => {
  let result = ''

  if (!params || !_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(params)) {
    return result
  }

  const parts = []
  _utils__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(params, (val, key) => {
    if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isEmpty(val)) {
      return
    }

    if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(val)) {
      key = key + '[]'
    } else {
      val = [val]
    }

    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(val, (v) => {
      if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isDate(v)) {
        v = v.toISOString()
      } else if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(v)) {
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


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  isDate,
  isObject,
  isArray,
  isEmpty,
  forEach,
});


/***/ })
/******/ ])["default"];
});