import React from "react";
import { Text, ScrollView } from "react-native";

import ListItem from "./PlaylistItem";

const List = ({ items, onPressItem }) => {
  return (
    <ScrollView style={{ padding: 10 }}>
      {items.map((item) => (
        <ListItem key={item.id.videoId} item={item} onPressItem={onPressItem} />
      ))}
    </ScrollView>
  );
};

export default List;
