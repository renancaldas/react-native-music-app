import React, { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";

import { Column, Scroll, Avatar, Icon, Row, FlexColumn } from '../styles';
import { Bold, Text, FlexRow } from '../../../AppStyles';

import convertMilliseconds from '../../helpers/convertMilliseconds';

import { queryVideos, getVideoByTrackId, preloadMp3 } from '../../api';
import spotifyApi from "../../api/spotify";

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
    setTracks
  } = useContext(AppContext);

  useEffect(() => {
    if (!tracks || tracks.length === 0) {
      setLoading(true);

      spotifyApi
        .getLikedSongs(user.spotifyToken.access_token)
        .then((likedSongs) => {
          setLoading(false);
          setTracks({
            href: likedSongs.href,
            items: likedSongs.map(item => item.track)
          })
        });
    }
  }, [tracks])

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
        const query = selectedArtist && selectedAlbum
          ? `${selectedArtist.name} ${selectedAlbum.name} ${track.name}`
          : `${track.album.artists[0].name} ${track.album.name} ${track.name}`;

        queryVideos(query).then((queryResults) => {
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
                track && track.album && track.album.images && track.album.images.length > 0 ? (
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
          ))
        }

      </Scroll>
    </Column>
  ) : null;
};

export default Tracks;
