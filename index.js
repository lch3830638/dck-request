if (process.env.NODE_ENV !== 'production') {
  module.exports = require('./lib/lDist/dck-request.js')
} else {
  module.exports = require('./lib/lDist/dck-request.min.js')
}
