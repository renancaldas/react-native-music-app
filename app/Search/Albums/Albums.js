import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

import { Column, Scroll, Avatar, Icon, Row, FlexColumn, } from '../styles';
import { Bold, FlexRow, Text } from '../../../AppStyles';

import spotifyApi from "../../api/spotify";

const Albums = () => {
  const { user, albums, setSelectedAlbum, setTracks } = useContext(AppContext);

  const onPressAlbum = (album) => {
    spotifyApi
      .getTracksByAlbumId(
        album.id,
        user.spotifyToken.access_token
      )
      .then((results) => {
        setSelectedAlbum(album);
        setTracks(results);
      });
  }



  return albums && albums.items.length > 0 ? (
    <Column>
      <Bold>Albums</Bold>
      <Scroll>
        {
          albums.items.map(album => (
            <Row key={album.id} onPress={() => onPressAlbum(album)}>
              {
                album.images.length > 0 ? (
                  <Avatar
                    source={{
                      uri: album.images[album.images.length - 1].url,
                    }} />
                ) : (
                    <Icon name="disc" />
                  )
              }
              <FlexColumn>
                <Text>
                  {album.name.substring(0, 36)}
                </Text>
                <FlexRow>
                  <Text>
                    {album.release_date}
                  </Text>
                  <Text> - </Text>
                  <Text>
                    {album.total_tracks} tracks
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

export default Albums;
