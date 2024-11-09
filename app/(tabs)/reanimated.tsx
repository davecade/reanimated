import React from "react";
import SharedValue from "@/components/reanimated/SharedValue";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, TouchableOpacity } from "react-native";

const Reanimated = () => {
  return (
    <SafeAreaView>
      <SharedValue />
    </SafeAreaView>
  );
};

export default Reanimated;
