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

/*
(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {musicData && (
        <View>
          <Image
            style={{ height: 200, width: 300 }}
            source={{
              uri: musicData.thumbs[musicData.thumbs.length - 1].url,
            }}
          />
          <Text>Title: {musicData.title}</Text>
          <Text>Date: {musicData.uploadDate}</Text>
          <Text>Views: {musicData.viewCount}</Text>
          <Text>Description: {musicData.description}</Text>
          <Text>Likes: {musicData.likes}</Text>
          <Text>Dislikes: {musicData.dislikes}</Text>

          {playing && <Button title='Pause' onPress={() => pause()} />}
          {!playing && <Button title='Play' onPress={() => play()} />}
        </View>
      )}

      <Button
        title='Get music by ID'
        onPress={() => getMusicById('EnJz5IwCeDY')}
      />
    </View>
  );
*/
