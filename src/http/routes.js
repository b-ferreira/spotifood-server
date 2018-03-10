
const authenticate = require('./modules/authenticate')

const routes = server => {
  authenticate(server)
}

module.exports = routes
