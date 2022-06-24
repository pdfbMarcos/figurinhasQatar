import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import {
  ListItem,
  ListItemBasic,
  ListItemSeparator,
} from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ProjectContext from "../project/context";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const menuItems = [
  {
    title: "Lista Planilha",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: "orange",
    },
    targetScreen: routes.SOURCEDOCUMENTSLIST,
  },
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
    targetScreen: routes.DIGDOCUMENTSLIST,
  },
  {
    title: "re-Preparacão",
    icon: {
      name: "archive-arrow-down-outline",
      backgroundColor: "#ffe00d",
    },
    targetScreen: routes.REPREPDOCUMENTSLIST,
  },
];

function MainScreen({ navigation }) {
  const { project } = useContext(ProjectContext);

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItemBasic
          title="PDF Brasil"
          subTitle={"Digitalização - " + project}
          image={require("../assets/pdfBrasil.png")}
        />
      </View>
      <ListItem
        title="Consulta"
        IconComponent={<Icon name="binoculars" backgroundColor="green" />}
        onPress={() => navigation.navigate(routes.DOCUMENTSLIST)}
      />
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
