import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({
  image,
  title,
  subTitle,
  marginLeft,
  onPress,
  height,
  width = 150,
  color = "medium",
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: colors[color],
          height: height,
          marginLeft: marginLeft,
          width: width,
        },
      ]}
      onPress={onPress}
    >
      {image ? <Image style={styles.image} source={image} /> : null}
      {title ? <Text style={styles.text}>{title}</Text> : null}
      {subTitle ? <Text style={styles.subText}>{subTitle}</Text> : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 5,
    marginEnd: 5,
  },
  image: {
    marginBottom: 5,
    marginTop: 5,
  },
  subText: {
    color: colors.black,
    fontSize: 10,
    marginTop: 5,
  },
  text: {
    color: colors.white,
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
