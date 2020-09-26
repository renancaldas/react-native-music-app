import config from '../config';
const isProduction = true;

const backendUrl = isProduction ? config.urls.backendHeroku : config.urls.backendLocal;

const handleApiError = (functionName, error) => {
  console.log(`Api error at ${functionName}`, error);
};

export const getYoutubeVideoDataById = (videoId) => {
  const url = `${backendUrl}/getYoutubeVideoDataById?id=${videoId}`;
  console.log('Api request', url);

  return fetch(url)
    .then((res) => res.json())
    .catch((error) => handleApiError('getYoutubeVideoDataById', error));
};

export const searchByQuery = (query) => {
  const url = `${backendUrl}/search?q=${query}`;
  console.log('Api request', url);

  return fetch()
    .then((res) => res.json())
    .catch((error) => handleApiError('searchByQuery', error));
};

export const searchByQueryPageToken = (query, pageToken) => {
  const url = `${backendUrl}/search?q=${query}&pageToken=${pageToken}`;
  console.log('Api request', url);

  return fetch(url)
    .then((res) => res.json())
    .catch((error) => handleApiError('searchByQueryPageToken', error));
};

export const searchGetData = (query) => {
  const url = `${backendUrl}/searchGetData?q=${query}`;
  console.log('Api request', url);

  return fetch(url)
    .then((res) => res.json())
    .catch((error) => handleApiError('searchGetData', error));
};

export const openSearchGetData = (query) => {
  const url = `${backendUrl}/openSearchGetData?q=${query}`;
  console.log('Api request', url);

  return fetch(url)
    .then((res) => res.json())
    .catch((error) => handleApiError('openSearchGetData', error));
};
