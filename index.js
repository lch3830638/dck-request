if (process.env.NODE_ENV !== 'production') {
  module.exports = require('./lib/dist/dck-request.js')
} else {
  module.exports = require('./lib/dist/dck-request.min.js')
}
