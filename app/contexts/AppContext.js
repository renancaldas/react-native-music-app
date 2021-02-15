import React, { createContext, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [route, setRoute] = useState('/home');
  const [user, setUser] = useState(0);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [selectedIndexTrack, setSelectedIndexTrack] = useState(0);
  const [screenOrientation, setScreenOrientationState] = useState(0);
  const [isOrientationVertical, setIsOrientationVertical] = useState(true);
  const [sound, setSound] = useState();
  const [playerStatus, setPlayerStatus] = useState();
  const [searchText, setSearchText] = useState('');
  const [artists, setArtists] = useState(null);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [tracks, setTracks] = useState(null);
  const [playlist, setPlaylist] = useState(null);
  const [openLinkModal, setOpenLinkModal] = useState(null);
  const [queryResults, setQueryResults] = useState(null);

  const setScreenOrientation = (orientation) => {
    setScreenOrientationState(orientation);
    setIsOrientationVertical(
      [
        ScreenOrientation.Orientation.PORTRAIT_UP,
        ScreenOrientation.Orientation.PORTRAIT_DOWN,
      ].indexOf(orientation) !== -1
    );
  };

  const addTrackToPlaylist = (track) => {
    if (!playlist || playlist.length === 0) {
      setPlaylist([track]);
    } else {
      const isTrackInPlaylist = playlist.filter(item => item.id === track.id).length > 0;
      if (!isTrackInPlaylist) {
        setPlaylist(playlist.concat([track]));
        if (toast) {
          toast.show(`"${track.name}" added to playlist`, 3000)
        }
      } else {
        if (toast) {
          toast.show(`"${track.name}" is already in playlist`, 3000)
        }
      }
    }
  }

  const removeTrackFromPlaylist = (track) => {
    setPlaylist(playlist.filter(item => item.id !== track.id));
    if (toast) {
      toast.show(`"${track.name}" removed to playlist`, 3000)
    }
  }

  return (
    <AppContext.Provider
      value={{
        route,
        user,
        loading,
        toast,
        selectedIndexTrack,
        screenOrientation,
        isOrientationVertical,
        sound,
        playerStatus,
        searchText,
        artists,
        selectedArtist,
        albums,
        selectedAlbum,
        selectedTrack,
        tracks,
        playlist,
        openLinkModal,
        queryResults,

        setRoute,
        setUser,
        setLoading,
        setToast,
        setSelectedIndexTrack,
        setScreenOrientation,
        setIsOrientationVertical,
        setSound,
        setPlayerStatus,
        setSearchText,
        setArtists,
        setSelectedArtist,
        setAlbums,
        setSelectedAlbum,
        setSelectedTrack,
        setTracks,
        setPlaylist,
        setOpenLinkModal,
        setQueryResults,
        addTrackToPlaylist,
        removeTrackFromPlaylist
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
