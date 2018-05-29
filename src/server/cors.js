
const corsMiddleware = require('restify-cors-middleware')

const cors = corsMiddleware({
  preflightMaxAge: 5, // Optional
  origins: ['http://react-app-playground.herokuapp.com', 'https://react-app-playground.herokuapp.com'],
  allowHeaders: ['GET'],
  exposeHeaders: ['GET']
})

module.exports = cors
