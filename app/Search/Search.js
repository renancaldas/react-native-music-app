import React, { useContext } from "react";
import { View } from "react-native";
import { AppContext } from "../contexts/AppContext";

import { Results } from './styles';

import SearchInput from './SerchInput';
import Artists from './Artists/Artists';
import Albums from './Albums/Albums';
import Tracks from './Tracks/Tracks';
import ModalLink from './ModalLink/ModalLink';

const Search = () => {
  const { user } = useContext(AppContext);

  return (
    <>
      <ModalLink />
      <View>
        <SearchInput />

        <Results>
          <Artists />
          <Albums />
          <Tracks />
        </Results>
      </View>
    </>
  );
};

export default Search;
