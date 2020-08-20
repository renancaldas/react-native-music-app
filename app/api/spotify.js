import config from "../config";

export const getCodeUrl = () => {
  const scope = `&scope=${encodeURIComponent(config.spotify.scopes)}`;
  const client_id = `&client_id=${config.spotify.clientId}`;
  const redirect_uri = `&redirect_uri=${config.spotify.redirectUrl}`;

  return `https://accounts.spotify.com/authorize?response_type=code${client_id}${scope}${redirect_uri}`;
};

export const getToken = (code, authBase64) => {
  const details = {
    grant_type: "authorization_code",
    redirect_uri: config.spotify.redirectUrl,
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
  }).then((res) => res.json());
};

export const getUserInfo = (access_token) => {
  return fetch(`https://api.spotify.com/v1/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`
    },
  }).then((res) => res.json());
};

export const search = (type, query, access_token) => {
  return fetch(`https://api.spotify.com/v1/search?type=${type}&q=${query}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`
    },
  }).then((res) => res.json());
};
