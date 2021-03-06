export default {
  urls: {
    firebase: "https://us-central1-musicapp-286403.cloudfunctions.net",
    backendHeroku: "https://react-native-music-app.herokuapp.com",
    backendLocal: "http://192.168.0.128:5000",
  },
  spotify: {
    redirectUrl:
      "https://us-central1-musicapp-286403.cloudfunctions.net/callbackSpotify",
    clientId: "77880ef48e6545949e1d36b049fb2f17",
    scopes: "user-read-private user-read-email user-library-read",
  },
};
