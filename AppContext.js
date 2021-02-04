import React, { createContext, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";

const tracks = [
  {
    id: 1,
    name: "Pause Theme",
    artist: "Final Fantasy",
    album: "FFXV",
    uri: "http://192.168.15.4:3000/video",
    cover: "ffxv_cover.jpeg",
  },
  {
    id: 2,
    name: "Stand Your Ground",
    artist: "Final Fantasy",
    album: "FFXV",
    uri: "http://192.168.15.4:3000/video",
    cover: "ffxv_cover.jpeg",
  },
  {
    id: 3,
    name: "Daemons",
    artist: "Final Fantasy",
    album: "FFXV",
    uri: "http://192.168.15.4:3000/video",
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
        setIsOrientationVertical,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
