import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

function ListItemCheckBoxAction({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="archive-check"
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemCheckBoxAction;
