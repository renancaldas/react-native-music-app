export const youtubeUrl = 'http://youtube.renancaldas.com:3000';
const musicUrl = 'http://music.renancaldas.com:3000';

const handleApiError = (functionName, error) => {
  console.log(`Api error at ${functionName}`, error);
};

export const queryVideos = (query) => {
  const url = `${youtubeUrl}/search?q=${query}`;
  console.log('Api request', url);

  return fetch(url)
    .then((res) => res.json())
    .catch((error) => handleApiError('queryVideos', error));
};

export const getVideoByTrackId = (trackId) => {
  const url = `${musicUrl}/getVideoByTrackId?trackId=${trackId}`;
  console.log('Api request', url);

  return fetch(url)
    .then((res) => res.json())
    .catch((error) => handleApiError('getVideoByTrackId', error));
};

export const linkTrackAndVideo = (trackId, videoId) => {
  const url = `${musicUrl}/linkTrackAndVideo`;
  console.log('Api request', url);

  return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        trackId,
        videoId
      })
    })
    .then((res) => res.json())
    .catch((error) => handleApiError('linkTrackAndVideo', error));
};

export const preloadMp3 = (youtubeId) => {
  const url = `${youtubeUrl}/preload?id=${youtubeId}`;
  console.log('Api request', url);

  return fetch(url)
    .then((res) => res.json())
    .catch((error) => handleApiError('preloadMp3', error));
};