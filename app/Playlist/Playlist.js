import React, { useContext } from "react";
import { View, ScrollView } from "react-native";
import { AppContext } from "../contexts/AppContext";

import { Avatar, Icon, Row, FlexColumn } from './styles';
import { Text, FlexRow } from '../../AppStyles';

import convertMilliseconds from '../helpers/convertMilliseconds';

const Playlist = () => {
  const { user, playlist, removeTrackFromPlaylist } = useContext(AppContext);

  const onPressTrack = (track) => {
    removeTrackFromPlaylist(track);
  }

  return (
    <View>
      <Text>Playlist</Text>

      <ScrollView>
        {
          playlist && playlist.length > 0 ? playlist.map(track => (
            <Row key={track.id} onPress={() => onPressTrack(track)}>
              {
                track && track.album && track.album.images.length > 0 ? (
                  <Avatar
                    source={{
                      uri: track.album.images[track.album.images.length - 1].url,
                    }} />
                ) : (
                    <Icon name="disc" />
                  )
              }
              <FlexColumn>
                {
                  track && track.track_number && track.name ? (
                    <Text>
                      {`${track.track_number} - ${track.name.substring(0, 35)}`}
                    </Text>
                  ) : null
                }
                <FlexRow>
                  <Text>
                    {convertMilliseconds(track.duration_ms)}
                  </Text>

                </FlexRow>
              </FlexColumn>
            </Row>
          )) : null
        }
      </ScrollView>
    </View>
  );
};

export default Playlist;
