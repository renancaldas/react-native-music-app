const firebaseUrl = "https://us-central1-musicapp-286403.cloudfunctions.net";
const localhostUrl = "http://192.168.0.128:3000";
const isProduction = false;

const backendUrl = isProduction ? firebaseUrl : localhostUrl;

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
