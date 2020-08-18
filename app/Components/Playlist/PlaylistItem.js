import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../../constants/colors";

import numberFormat from "../../helpers/numberFormat";

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
        <View
          style={{
            backgroundColor: colors.solid.black,
            marginRight: 10,
            borderRadius: 10,
          }}
        >
          <Image
            style={{
              width: 60,
              height: "100%",
              borderRadius: 10,
              opacity: 0.5,
            }}
            source={{ uri: thumbnails.default.url }}
          />
          <Text
            style={{
              position: "absolute",
              color: colors.solid.white,
              top: 45,
              left: 18,
            }}
          >
            {formatedDuration}
          </Text>
          <AntDesign
            style={{
              position: "absolute",
              color: colors.solid.white,
              top: 12,
              left: 15,
            }}
            name="playcircleo"
            size={30}
          />
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-around",
            height: "100%",
            width: "75%",
          }}
        >
          <Text numberOfLines={2} style={{ color: colors.text.title }}>
            {title}
          </Text>

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
              <AntDesign name="playcircleo" size={12} color={colors.text.title} />
              <Text style={{ marginLeft: 4, color: colors.text.title }}>{numberFormat(viewCount)}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AntDesign name="like2" size={12} color={colors.text.title}/>
              <Text style={{ marginLeft: 4, color: colors.text.title }}>{numberFormat(likeCount)}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AntDesign name="dislike2" size={12} color={colors.text.title}/>
              <Text style={{ marginLeft: 4, color: colors.text.title }}>
                {numberFormat(dislikeCount)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
