const Spotify = require('spotify-web-api-node')

const spotifyApi = new Spotify({
  clientId: process.env.SPOTIFY_AUTH_ID,
  clientSecret: process.env.SPOTIFY_AUTH_SECRET
})

module.exports = function authenticate (server) {
  server.get('api/v1/authenticate', async (req, res, next) => {
    try {
      const { access_token } = await spotifyApi.clientCredentialsGrant()
      res.send(access_token)
    } catch (err) {
      res.send(500, err)
    }
    next()
  })
}
