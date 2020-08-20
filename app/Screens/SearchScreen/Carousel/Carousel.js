import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  View,
  Dimensions,
  StyleSheet,
} from "react-native";
import Carousel from "react-native-snap-carousel";

import { scrollInterpolator, animatedStyles } from "./animations";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const CarouselComponent = ({ items }) => {
  let carouselRef = null;
  const [index, setIndex] = useState(0);

  const renderItem = ({ item, index }) => {
    const uri = item.images && item.images.length > 0 ? item.images[0].url : "";
    return (
      <ImageBackground source={{ uri }} style={styles.image}>
        <Text style={styles.itemLabel}>{item.name}</Text>
      </ImageBackground>
    );
  };

  return (
    <View>
      <Carousel
        ref={(c) => (carouselRef = c)}
        data={items}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        onSnapToItem={(index) => setIndex(index)}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        useScrollView={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 0,
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  itemLabel: {
    color: "white",
    fontSize: 24,
  },
});

export default CarouselComponent;
