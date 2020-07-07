if (process.env.NODE_ENV !== 'production') {
  module.exports = require('./lib/lib_dist/dck-request.js')
} else {
  module.exports = require('./lib/lib_dist/dck-request.min.js')
}
