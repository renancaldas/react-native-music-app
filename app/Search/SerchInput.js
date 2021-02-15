import React, { useContext, useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { EvilIcons, Entypo } from "@expo/vector-icons";

import spotifyApi from "../api/spotify";
import { AppContext } from "../contexts/AppContext";

const Search = () => {
  let searchInputRef = null;
  const {
    user,
    searchText,
    setSearchText,
    setArtists,
    setSelectedArtist,
    setAlbums,
    setSelectedAlbum,
    setTracks,
  } = useContext(AppContext);

  const onSearch = () => {
    spotifyApi
      .searchArtist(searchText, user.spotifyToken.access_token)
      .then((artistResults) => {
        setArtists(artistResults.artists);

        const selectedArtist = artistResults.artists.items[0];
        setSelectedArtist(selectedArtist);

        if (artistResults.artists.items.length > 0) {
          spotifyApi
            .getAlbumsByArtistId(
              selectedArtist.id,
              user.spotifyToken.access_token
            )
            .then((albumResults) => {
              setAlbums(albumResults);

              const selectedAlbum = albumResults.items[0];
              setSelectedAlbum(selectedAlbum);

              if (albumResults.items.length > 0) {
                spotifyApi
                  .getTracksByAlbumId(
                    selectedAlbum.id,
                    user.spotifyToken.access_token
                  )
                  .then((results) => {
                    setTracks(results);
                  });
              }
            });
        }
      })
      .catch(() => {
        alert('Refresh token')

        /*
        spotifyApi
          .refreshToken(user.spotifyToken.refresh_token, user.authBase64)
          .then((token) => {
            alert('Refresh token done!')
          });
        */
      });
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 40,
        width: "100%",
        borderRadius: 20,
        backgroundColor: 'lightgrey',
        paddingHorizontal: 10,
      }}
    >
      <View style={{ width: 10 }}>
        <View
          style={{
            backgroundColor: 'black',
            width: 22,
            height: 22,
            position: "absolute",
            top: 5,
            left: 5,
            borderRadius: 10,
          }}
        />

        <Entypo
          name="spotify"
          size={32}
          style={{ color: 'green', width: 50 }}
        />
      </View>

      <TextInput
        ref={(ref) => {
          searchInputRef = ref;
        }}
        style={{ height: 40, width: "88%" }}
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        placeholder="Search for artists"
        placeholderTextColor="black"
        onBlur={() => onSearch(searchText)}
        selectTextOnFocus
      />

      <TouchableOpacity onPress={() => searchInputRef.blur()}>
        <EvilIcons name="search" size={32} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
