import React from "react";
import SharedValue from "@/components/reanimated/SharedValue";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, TouchableOpacity } from "react-native";
import AnimationFunction from "@/components/reanimated/AnimationFunctions";

const Reanimated = () => {
  return (
    <SafeAreaView>
      {/* <SharedValue /> */}
      <AnimationFunction />
    </SafeAreaView>
  );
};

export default Reanimated;
