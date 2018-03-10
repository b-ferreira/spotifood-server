
const server = require('./server')

server.listen('1111', () => {
  console.log('%s listening at %s', server.name, server.url)
})
