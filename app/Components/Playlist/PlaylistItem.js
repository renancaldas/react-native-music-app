import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import moment from "moment";

const ListItem = ({ item, onPressItem }) => {
  const { channelTitle, title, thumbnails } = item.snippet;
  const { duration } = item.contentDetails;

  const formatedDuration = duration
    .replace("PT", "")
    .replace("S", "")
    .replace("M", ":");

  return (
    <TouchableOpacity onPress={() => onPressItem(item)}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginVertical: 10,
          height: 60,
        }}
      >
        <View>
          <Image
            style={{
              width: 60,
              height: "100%",
              borderRadius: 10,
              marginRight: 10,
            }}
            source={{ uri: thumbnails.default.url }}
          />
          <Text
            style={{ position: "absolute", color: "white", top: 45, left: 18 }}
          >
            {formatedDuration}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-around",
            height: "100%",
            width: "80%",
          }}
        >
          <Text numberOfLines={2}>{title}</Text>
          <Text style={{ color: "#B6B7BF" }}>{channelTitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
