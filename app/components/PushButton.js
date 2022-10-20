import React from "react";
import { StyleSheet, View } from "react-native";

import Button from "./Button";

function PushButton({ color, height, onPress, title, width }) {
  return (
    <View>
      <Button
        title={title}
        height={height}
        width={width}
        color={color}
        onPress={onPress}
      />
    </View>
  );
}

export default PushButton;
