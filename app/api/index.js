import config from "../config";
const isProduction = false;

const backendUrl = isProduction ? config.urls.firebase : config.urls.localhost;

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