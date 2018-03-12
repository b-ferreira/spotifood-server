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

  server.get(`${URL_PREFIX}/featured-playlists`,
    // Attempts to login on Spotify before requesting the featured playlists.
    async (req, res, next) => {
      if (!spotifyApi.getAccessToken()) {
        try {
          const { body } = await spotifyApi.clientCredentialsGrant()
          spotifyApi.setAccessToken(body.access_token)
        } catch (err) {
          res.send(500, err)
          next(false)
        }
      }
      next()
    },
    // Requests the featured playlists
    async (req, res, next) => {
      try {
        const { body } = await spotifyApi.getFeaturedPlaylists({
          ...req.query
        })
        res.send(200, {
          message: body.message,
          playlists: body.playlists.items
        })
      } catch (err) {
        // In case the token has been expired, we clear our current token.
        // It'll be loaded again in the next time we consume the API.
        if (err.statusCode === 401) {
          spotifyApi.setAccessToken(null)
          res.send(401, {
            error: true,
            message: 'Expired token.'
          })
        } else {
          res.send(500, err)
        }
      }
      next()
    })
}
