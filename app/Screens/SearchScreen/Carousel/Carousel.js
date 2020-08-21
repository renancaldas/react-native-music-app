import React from "react";
import { View, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

import { scrollInterpolator, animatedStyles } from "./animations";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselComponent = ({ items, onChange, renderItem }) => {
  let carouselRef = null;

  const onSnapToItem = (index) => {
    if (onChange) {
      onChange(items[index]);
    }
  };

  return (
    <View>
      <Carousel
        layout={"default"}
        ref={(c) => (carouselRef = c)}
        data={items}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        useScrollView={true}
        onSnapToItem={onSnapToItem}
      />
    </View>
  );
};

export default CarouselComponent;
