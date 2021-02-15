const config = {
  redirectUrl:
    "http://music.renancaldas.com:3000/callbackSpotify",
  clientId: "77880ef48e6545949e1d36b049fb2f17",
  scopes: "user-read-private user-read-email user-library-read",
};

const handleResponse = (res) =>
  new Promise((resolve, reject) => {
    if (res.ok) {
      res.json().then(resolve);
    } else {
      res.json().then(reject);
    }
  });

const getCodeUrl = () => {
  const scope = `&scope=${encodeURIComponent(config.scopes)}`;
  const client_id = `&client_id=${config.clientId}`;
  const redirect_uri = `&redirect_uri=${config.redirectUrl}`;

  return `https://accounts.spotify.com/authorize?response_type=code${client_id}${scope}${redirect_uri}`;
};

const getToken = (code, authBase64) => {
  const details = {
    grant_type: "authorization_code",
    redirect_uri: config.redirectUrl,
    code,
  };

  let formBody = [];
  for (let property in details) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  return fetch(`https://accounts.spotify.com/api/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${authBase64}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody,
  }).then(handleResponse);
};

const refreshToken = (refresh_token, authBase64) => {
  const details = {
    grant_type: "refresh_token",
    refresh_token,
  };

  let formBody = [];
  for (let property in details) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  return fetch(`https://accounts.spotify.com/api/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${authBase64}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody,
  }).then(handleResponse);
};

const getUserInfo = (access_token) => {
  return fetch(`https://api.spotify.com/v1/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).then(handleResponse);
};

const search = (type, query, access_token) => {
  return fetch(`https://api.spotify.com/v1/search?type=${type}&q=${query}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).then(handleResponse);
};

const searchArtist = (query, access_token) =>
  search("artist", query, access_token);

const searchAlbum = (query, access_token) =>
  search("album", query, access_token);

const searchTrack = (query, access_token) =>
  search("track", query, access_token);

const getAlbumsByArtistId = (artist_id, access_token) => {
  return fetch(`https://api.spotify.com/v1/artists/${artist_id}/albums`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).then(handleResponse);
};

const getTracksByAlbumId = (album_id, access_token) => {
  return fetch(`https://api.spotify.com/v1/albums/${album_id}/tracks`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).then(handleResponse);
};

export default {
  getCodeUrl,
  getToken,
  refreshToken,
  getUserInfo,
  search,
  searchArtist,
  searchAlbum,
  searchTrack,
  getAlbumsByArtistId,
  getTracksByAlbumId,
};
