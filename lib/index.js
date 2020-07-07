import Http from './core/Http'

const createInstance = (config = {}) => {
  const context = new Http(config)
  const instance = Http.prototype.request.bind(context)
  Object.keys(context).forEach(val => {
    instance[val] = context[val]
  })
  return instance
}

const request = createInstance()

request.create = (globalConfig) => {
  return createInstance(globalConfig)
}

export default request
