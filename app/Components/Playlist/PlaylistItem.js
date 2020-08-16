import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ListItem = ({ item, onPressItem }) => {
  const { channelTitle, title, thumbnails } = item.snippet;
  const { duration } = item.contentDetails;
  const { viewCount, likeCount, dislikeCount } = item.statistics;

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
          marginVertical: 5,
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
            width: "75%",
          }}
        >
          <Text numberOfLines={2}>{title}</Text>
          {/* <Text style={{ color: "#B6B7BF" }}>{channelTitle}</Text> */}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AntDesign name="playcircleo" size={12}  />
              <Text style={{ marginLeft: 4  }}>{viewCount}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AntDesign name="like2" size={12}  />
              <Text style={{ marginLeft: 4  }}>{likeCount}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AntDesign name="dislike2" size={12}  />
              <Text style={{ marginLeft: 4  }}>{dislikeCount}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
