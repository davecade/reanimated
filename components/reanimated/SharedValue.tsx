import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

// Using Shared Value
const SharedValue = () => {
  // Set the default values
  const width = useSharedValue(100);
  const height = useSharedValue(100);
  const backgroundColor = useSharedValue("red");

  // When this runs, it will change the values of the shared values
  const onAnimate = () => {
    width.value = Math.random() * 300;
    height.value = Math.random() * 300;
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

  // Created an animated style to apply to the animated view
  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: height.value,
      backgroundColor: backgroundColor.value,
    };
  });

  return (
    <View>
      <Animated.View style={[animatedStyles]}></Animated.View>
      <Button title="Animate" onPress={onAnimate} />
    </View>
  );
};

export default SharedValue;

const styles = StyleSheet.create({});
