import config from "../config";
const isProduction = false;

const backendUrl = isProduction ? config.urls.firebase : config.urls.localhost;

export const getYoutubeLoginUrl = () =>
  fetch(`${backendUrl}/loginYoutube`).then((res) => res.json());

export const getYoutubeVideoDataById = (videoId) =>
  fetch(`${backendUrl}/getYoutubeVideoDataById?id=${videoId}`).then((res) =>
    res.json()
  );

export const searchByQuery = (query) =>
  fetch(`${backendUrl}/search?q=${query}`).then((res) => res.json());

export const searchByQueryPageToken = (query, pageToken) =>
  fetch(`${backendUrl}/search?q=${query}&pageToken=${pageToken}`).then((res) =>
    res.json()
  );

export const getSpotifyCodeUrl = () => {
  const scope = `&scope=${encodeURIComponent(config.spotify.scopes)}`;
  const client_id = `&client_id=${config.spotify.clientId}`;
  const redirect_uri = `&redirect_uri=${config.spotify.redirectUrl}`;

  return `https://accounts.spotify.com/authorize?response_type=code${client_id}${scope}${redirect_uri}`;
};
export const getSpotifyToken = (code, authBase64) => {
  const details = {
    grant_type: "authorization_code",
    redirect_uri: config.spotify.redirectUrl,
    code,
  };
  console.log(">>> details", details);

  let formBody = [];
  for (let property in details) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  console.log(">>> formBody", formBody);

  return fetch(`https://accounts.spotify.com/api/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${authBase64}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody,
  }).then((res) => res.json());
};
