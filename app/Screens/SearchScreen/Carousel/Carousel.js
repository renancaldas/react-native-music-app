import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  View,
  Dimensions,
  StyleSheet,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { LinearGradient } from 'expo-linear-gradient';

import { scrollInterpolator, animatedStyles } from "./animations";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 6);

const CarouselComponent = ({ items }) => {
  let carouselRef = null;
  const [index, setIndex] = useState(0);

  const renderItem = ({ item, index }) => {
    const uri = item.images && item.images.length > 0 ? item.images[0].url : "";
    return (
      <ImageBackground source={{ uri }} style={styles.image}>
        <Text style={styles.itemLabel}>{item.name}</Text>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,1)']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 100,
          }}
        />
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
    justifyContent: "flex-end",
    padding: 10, 
  },
  itemLabel: {
    color: "white",
    fontSize: 20,
    zIndex: 1,
  },
});

export default CarouselComponent;
