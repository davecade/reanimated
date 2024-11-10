import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const AnimationFunction = () => {
  const width = useSharedValue(100);
  const height = useSharedValue(100);
  const backgroundColor = useSharedValue("red");

  const onAnimateWithSpring = () => {
    const randomWidth = Math.random() * 300;
    const randomHeight = Math.random() * 300;

    // using withSpring to slowly animate the change
    width.value = withSpring(randomWidth);
    height.value = withSpring(randomHeight);
    backgroundColor.value =
      backgroundColor.value === "red"
        ? "green"
        : backgroundColor.value === "green"
        ? "blue"
        : backgroundColor.value === "blue"
        ? "orange"
        : backgroundColor.value === "orange"
        ? "purple"
        : "red";
  };

  const onAnimateWithTiming = () => {
    const randomWidth = Math.random() * 300;
    const randomHeight = Math.random() * 300;
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    // using withTiming to slowly animate the change
    width.value = withTiming(randomWidth, {
      duration: 400,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
    height.value = withTiming(randomHeight, {
      duration: 400,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
    backgroundColor.value = withSpring(randomColor);
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: height.value,
      backgroundColor: backgroundColor.value,
    };
  });

  const onAnimateWithDelay = () => {
    const randomWidth = Math.random() * 300;
    const randomHeight = Math.random() * 300;
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    // using withTiming to slowly animate the change
    width.value = withTiming(randomWidth, {
      duration: 400,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
    height.value = withTiming(randomHeight, {
      duration: 400,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
    backgroundColor.value = withDelay(1000, withSpring(randomColor));
  };

  return (
    <View>
      <Animated.View style={animatedStyles}></Animated.View>
      <Button title="Animate" onPress={onAnimateWithDelay} />
    </View>
  );
};

export default AnimationFunction;

const styles = StyleSheet.create({});
