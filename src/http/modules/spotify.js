const Spotify = require('spotify-web-api-node')

const URL_PREFIX = 'api/v1'

const spotifyApi = new Spotify({
  clientId: process.env.SPOTIFY_AUTH_ID,
  clientSecret: process.env.SPOTIFY_AUTH_SECRET
})

module.exports = function authenticate (server) {
  server.get(`${URL_PREFIX}/authenticate`, async (req, res, next) => {
    try {
      const { body } = await spotifyApi.clientCredentialsGrant()
      spotifyApi.setAccessToken(body.access_token)
      res.send(200)
    } catch (err) {
      res.send(500, err)
    }
    next()
  })

  server.get(`${URL_PREFIX}/featured-playlists`, async (req, res, next) => {
    try {
      const { body } = await spotifyApi.getFeaturedPlaylists({
        ...req.query
      })
      res.send(200, body)
    } catch (err) {
      res.send(500, err)
    }
    next()
  })
}
