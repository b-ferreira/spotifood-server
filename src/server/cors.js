
const corsMiddleware = require('restify-cors-middleware')

const cors = corsMiddleware({
  preflightMaxAge: 5, // Optional
  origins: ['http://ifood-frontend-test.herokuapp.com', 'https://ifood-frontend-test.herokuapp.com'],
  allowHeaders: ['GET'],
  exposeHeaders: ['GET']
})

module.exports = cors
