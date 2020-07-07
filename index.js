if (process.env.NODE_ENV !== 'production') {
  module.exports = require('./libDist/dck-request.js')
} else {
  module.exports = require('./libDist/dck-request.min.js')
}
