import React from "react";
import { View, ScrollView } from "react-native";

import PlaylistItem from "../PlaylistItem/PlaylistItem";

const Playlist = ({ items }) => {
  return (
    <View>
      <ScrollView>
        {items.map((item) => (
          <PlaylistItem
            key={item.id}
            item={item}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Playlist;
