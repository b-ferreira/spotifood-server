require('dotenv').config()

const server = require('./server')

server.listen(process.env.PORT || 5000, () => {
  console.log(`${server.name} listening at ${server.url}`)
})
