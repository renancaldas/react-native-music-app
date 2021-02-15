import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

import { Column, Scroll, Avatar, Icon, Row } from '../styles';
import { Bold, Text } from '../../../AppStyles';

const Artists = () => {
  const { user, artists } = useContext(AppContext);


  return artists && artists.items.length > 0 ? (
    <Column>
      <Bold>Artists</Bold>
      <Scroll>
        {
          artists.items.map(artist => (
            <Row key={artist.id}>
              {
                artist.images.length > 0 ? (
                  <Avatar
                    source={{
                      uri: artist.images[artist.images.length - 1].url,
                    }} />
                ) : (
                  <Icon name="disc" />
                )
              }
              <Text>
                {artist.name}
              </Text>
            </Row>
          ))
        }

      </Scroll>
    </Column>
  ) : null;
};

export default Artists;
