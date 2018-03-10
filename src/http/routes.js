
const spotify = require('./modules/spotify')

const routes = server => {
  spotify(server)
}

module.exports = routes
