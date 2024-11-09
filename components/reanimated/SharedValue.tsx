import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, { useSharedValue } from "react-native-reanimated";

const SharedValue = () => {
  const width = useSharedValue(100);
  const height = useSharedValue(100);

  const onAnimate = () => {
    width.value = Math.random() * 300;
    height.value = Math.random() * 300;
  };

  return (
    <View>
      <Animated.View
        style={{
          width: width,
          height: height,
          backgroundColor: "blue",
        }}
      ></Animated.View>
      <Button title="Animate" onPress={onAnimate} />
    </View>
  );
};

export default SharedValue;

const styles = StyleSheet.create({});
