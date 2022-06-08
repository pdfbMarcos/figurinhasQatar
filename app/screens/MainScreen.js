import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const menuItems = [
  {
    title: "Preparacão",
    icon: {
      name: "apple-keyboard-caps",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.ADDDOCUMENTS,
  },
  {
    title: "Digitalização",
    icon: {
      name: "file-table-box",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.DOCUMENTSLIST,
  },
];

function MainScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="PDF Brasil"
          subTitle="Digitalização - Controle"
          image={require("../assets/pdfBrasil.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="re-Preparacão"
        IconComponent={
          <Icon name="archive-arrow-down-outline" backgroundColor="#ffe00d" />
        }
        onPress={() => navigation.navigate(routes.REPREPDOCUMENTSLIST)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default MainScreen;
