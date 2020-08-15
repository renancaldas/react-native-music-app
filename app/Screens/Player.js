import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

import { getYoutubeVideoDataById } from '../api';
const soundObject = new Audio.Sound();

const Player = ({ route, navigation, text }) => {
  // const { youtubeLogin } = useSelector((state) => state.User);

  const [musicData, setMusicData] = useState(null);
  const getMusicById = (id) => {
    console.log(`getMusicById(${id})`);

    getYoutubeVideoDataById(id).then((data) => {
      console.log('Downloaded music data: ', data.title);
      setMusicData(data);
    });
  };

  const [playing, setPlay] = useState(null);
  const play = () => {
    console.log('Request play');

    const sourceList = musicData.sourceList.filter(source => source.hasAudio && source.hasVideo);
    console.log('sourceList: ', sourceList);

    const uri = sourceList[0].url;

    soundObject.loadAsync({ uri }).then(() => {
      console.log('Loaded url:', uri);
      soundObject.playAsync().then(() => {
        console.log('setPlay = true');
        setPlay(true);
      });
    });
  };

  const pause = () => {
    soundObject.pauseAsync().then(() => {
      setPlay(false);
    });
  };

  // useEffect( () => {
  //   return () => {
  //     soundObject.unloadAsync();
  //   }
  // })

  return (
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
};

export default Player;
