import React, { useContext } from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";

import Button from "../components/Button";
import ProjectContext from "../project/context";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  const projectContext = useContext(ProjectContext);

  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logoWelcome.jpg")}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="UQGQPA"
          color="secondary"
          onPress={() => {
            navigation.navigate(routes.MENUSCREEN);
            projectContext.setProject("uqgqpa");
          }}
        />
        <Button
          title="UQCQPA"
          onPress={() => {
            navigation.navigate(routes.MENUSCREEN);
            projectContext.setProject("uqcqpa");
          }}
        />
        <Button
          title="INOVATGQ"
          color="medium"
          onPress={() => {
            navigation.navigate(routes.MENUSCREEN);
            projectContext.setProject("inovatgq");
          }}
        />
        <Button
          title="INOVATCQ"
          color="mediumLight"
          onPress={() => {
            navigation.navigate(routes.MENUSCREEN);
            projectContext.setProject("inovat");
          }}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Caixas - UQGQPA"
          color="secondary"
          onPress={() => {
            navigation.navigate(routes.CHECKBOXLIST);
            projectContext.setProject("uqgqpa");
          }}
        />
        <Button
          title="Caixas - INOVATGQ"
          color="medium"
          onPress={() => {
            navigation.navigate(routes.CHECKBOXLIST);
            projectContext.setProject("inovatgq");
          }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    borderRadius: 25,
    height: 150,
    width: 300,
  },
  logoContainer: {
    position: "absolute",
    top: 30,
    alignItems: "center",
  },
});

export default WelcomeScreen;
