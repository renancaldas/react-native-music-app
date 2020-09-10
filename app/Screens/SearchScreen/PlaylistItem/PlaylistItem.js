import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../../../constants/colors";
import numberFormat from "../../../helpers/numberFormat";

const ListItem = ({ item }) => {
  const dispatch = useDispatch();

  const onPressItem = (selectedItem) => {
  };

  const image = item.images.length > 0 ? item.images[item.images.length - 1].url : '';

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
            source={{ uri: image }}
          />
          <Text
            style={{
              position: "absolute",
              color: colors.solid.white,
              top: 45,
              left: 18,
            }}
          >
            0
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
            {item.name}
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
              <AntDesign
                name="playcircleo"
                size={12}
                color={colors.text.title}
              />
              <Text style={{ marginLeft: 4, color: colors.text.title }}>
                0
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AntDesign name="like2" size={12} color={colors.text.title} />
              <Text style={{ marginLeft: 4, color: colors.text.title }}>
                0
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AntDesign name="dislike2" size={12} color={colors.text.title} />
              <Text style={{ marginLeft: 4, color: colors.text.title }}>
                0
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
