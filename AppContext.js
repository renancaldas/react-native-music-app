import React, { createContext, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";

const tracks = [
  {
    id: 1,
    name: "Pause Theme",
    artist: "Final Fantasy",
    album: "FFXV",
    uri:
      "https://storage.cloudconvert.com/tasks/9929b910-7959-4b93-a9ae-1b0a7e5ddfc8/ffxv_pause_theme.mp3?AWSAccessKeyId=cloudconvert-production&Expires=1611687799&Signature=Rip7mpUfpWYVw3HYIKwyxX5GXcQ%3D&response-content-disposition=inline%3B%20filename%3D%22ffxv_pause_theme.mp3%22&response-content-type=audio%2Fmpeg",
    cover: "ffxv_cover.jpeg",
  },
  {
    id: 2,
    name: "Stand Your Ground",
    artist: "Final Fantasy",
    album: "FFXV",
    uri:
      "https://storage.cloudconvert.com/tasks/e6200c40-c03e-4033-9281-656a981a1be3/ffxv_stand_your_ground.mp3?AWSAccessKeyId=cloudconvert-production&Expires=1611683485&Signature=dGE3O1TmOlglaRZxAQT3yvQBYaE%3D&response-content-disposition=inline%3B%20filename%3D%22ffxv_stand_your_ground.mp3%22&response-content-type=audio%2Fmpeg",
    cover: "ffxv_cover.jpeg",
  },
  {
    id: 3,
    name: "Daemons",
    artist: "Final Fantasy",
    album: "FFXV",
    uri:
      "https://storage.cloudconvert.com/tasks/3d531b28-35f9-45e7-ae94-c43d40fef607/ffxv_daemons.mp3?AWSAccessKeyId=cloudconvert-production&Expires=1611683894&Signature=Ka3d4B%2F91OIPqawqfZ8edSxSOAg%3D&response-content-disposition=inline%3B%20filename%3D%22ffxv_daemons.mp3%22&response-content-type=audio%2Fmpeg",
    cover: "ffxv_cover.jpeg",
  },
];

const AppContext = createContext({
  tracks: [],

  selectedIndexTrack: null,
  screenOrientation: null,
  isOrientationVertical: null,

  setSelectedIndexTrack: () => null,
  setScreenOrientation: () => null,
  setIsOrientationVertical: () => null,
});

const AppProvider = ({ children }) => {
  const [selectedIndexTrack, setSelectedIndexTrack] = useState(0);
  const [screenOrientation, setScreenOrientationState] = useState(0);
  const [isOrientationVertical, setIsOrientationVertical] = useState(true);

  const setScreenOrientation = (orientation) => {
    setScreenOrientationState(orientation);
    setIsOrientationVertical(
      [
        ScreenOrientation.Orientation.PORTRAIT_UP,
        ScreenOrientation.Orientation.PORTRAIT_DOWN,
      ].indexOf(orientation) !== -1
    );
  };

  return (
    <AppContext.Provider
      value={{
        tracks,

        selectedIndexTrack,
        screenOrientation,
        isOrientationVertical,

        setSelectedIndexTrack,
        setScreenOrientation,
        setIsOrientationVertical
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
