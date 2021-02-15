import React, { useContext, useEffect } from "react";
import { TouchableOpacity } from "react-native";

import { AppContext } from "../contexts/AppContext";

import { FlexRow, FlexColumn, Title, Subtitle } from '../../AppStyles';
import { Container, Avatar, Icon } from './styles';

const Home = () => {
  const { user, setUser, setRoute } = useContext(AppContext);

  useEffect(() => {
    if (!user) {
      setRoute('/login');
    }
  }, [user]);

  const onPressLogout = () => {
    setUser(null);
  }

  return user ? (
    <Container>
      <FlexRow>
        <Avatar
          source={{
            uri: user.userData.images[0].url,
          }} />
        <FlexColumn>
          <Title>{user.userData.display_name}</Title>
          <Subtitle>{user.userData.email}</Subtitle>
        </FlexColumn>
      </FlexRow>

      <TouchableOpacity onPress={onPressLogout}>
        <FlexRow >
          <Icon name="logout" />
          <Subtitle>{'Logout'}</Subtitle>
        </FlexRow>
      </TouchableOpacity>


    </Container>
  ) : null;
};

export default Home;
