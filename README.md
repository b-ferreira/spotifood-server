# spotifood-server

A very basic RESTful Web Serivce built wiht Node and [Restify](http://restify.com/) that comunicates with Spotify Web API in order to perform authentication and list of Featured Playlists.

## Setup

After clone the repository, just run **$ npm install** in order to install all the dependencies. After that you should be able to start the server by running **$ npm run start:dev**.

## .env

The application uses some configuration provided from your **enviroment**. In order to do so, create a file called **.env** at the root directory of the server source folder and configure the following variables:

- **PORT** The port where the server will listen for incomming requests, we're using 5000 just to avoid conflicts with other services.
- **SPOTIFY_AUTH_ID** is used to authenticate on Spotify Web API.
- **SPOTIFY_AUTH_SECRET** is also used to authenticate on Spotify Web API.

In order to get your own **SPOTIFY_AUTH_ID** and **SPOTIFY_AUTH_SECRET**, access the [Spotify for Developer's Dashboard](https://beta.developer.spotify.com/dashboard/) and create your own App.
