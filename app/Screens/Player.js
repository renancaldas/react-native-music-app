import React, { useState, useEffect } from "react";
import { View, Button } from "react-native";

import { getYoutubeVideoDataById } from "../api";

import MusicPlayer from "../Components/Player/Player";

const Player = ({ route, navigation, text }) => {
  console.log('View player render')
  // const { youtubeLogin } = useSelector((state) => state.User);

  const [musicData, setMusicData] = useState(null);
  const getMusicById = (id) => {
    console.log(`getMusicById(${id})`);

    getYoutubeVideoDataById(id).then((data) => {
      console.log("Downloaded music data: ", data);
      setMusicData(data);
    });
  };


  return musicData ? (
    <MusicPlayer musicData={musicData} />
  ) : (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Get music by ID"
        onPress={() => getMusicById("EnJz5IwCeDY")}
      />
    </View>
  );
};

export default Player;