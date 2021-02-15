import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

import { Column, Scroll, Avatar, Icon, Row, FlexColumn } from '../styles';
import { Bold, Text, FlexRow } from '../../../AppStyles';

import convertMilliseconds from '../../helpers/convertMilliseconds';

import { queryVideos, getVideoByTrackId, preloadMp3 } from '../../api';

const Tracks = () => {
  const { 
    user, 
    selectedArtist, 
    selectedAlbum, 
    tracks, 
    setLoading,
    setOpenLinkModal, 
    setQueryResults, 
    setSelectedTrack, 
    addTrackToPlaylist,
  } = useContext(AppContext);

  const onPressTrack = (track) => {
    setSelectedTrack(track);
    setLoading(true);

    getVideoByTrackId(track.id).then((result) => {
      if (result.youtubeId) {
        preloadMp3(result.youtubeId);
        addTrackToPlaylist({
          ...track,
          album: selectedAlbum,
          youtubeId: result.youtubeId
        });
        setLoading(false);
      } else {
        queryVideos(`${selectedArtist.name} ${selectedAlbum.name} ${track.name}`).then((queryResults) => {
          setQueryResults(queryResults);
          setOpenLinkModal(true);
          setLoading(false);
        })
      }
    })
  }

  return tracks && tracks.items.length > 0 ? (
    <Column>
      <Bold>Tracks</Bold>
      <Scroll>
        {
          tracks.items.map(track => (
            <Row key={track.id} onPress={() => onPressTrack(track)}>
              {
                selectedAlbum.images.length > 0 ? (
                  <Avatar
                    source={{
                      uri: selectedAlbum.images[selectedAlbum.images.length - 1].url,
                    }} />
                ) : (
                    <Icon name="disc" />
                  )
              }
              <FlexColumn>
                <Text>
                  {`${track.track_number} - ${track.name.substring(0, 35)}`}
                </Text>
                <FlexRow>
                  <Text>
                    {convertMilliseconds(track.duration_ms)}
                  </Text>

                </FlexRow>
              </FlexColumn>
            </Row>
          ))
        }

      </Scroll>
    </Column>
  ) : null;
};

export default Tracks;
