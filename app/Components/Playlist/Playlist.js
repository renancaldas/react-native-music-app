import React from "react";
import { View, ScrollView } from "react-native";

import ListItem from "./PlaylistItem";

const List = ({ items, onPressItem }) => {
  return (
    <View style={{ height: "100%" }}>
      <ScrollView>
        {items.map((item) => (
          <ListItem
            key={item.id.videoId}
            item={item}
            onPressItem={onPressItem}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default List;
