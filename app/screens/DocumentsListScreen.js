import React, { useContext, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import documentApi from "../api/document";
import ProjectContext from "../project/context";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import { ListItem, ListItemSeparator } from "../components/lists";

function DocumentsListScreen({ navigation }) {
  const { project } = useContext(ProjectContext);
  const getDocumentsApi = useApi(documentApi.getDocuments);

  useEffect(() => {
    getDocumentsApi.request("/" + project);
  }, []);

  const dataDocuments = getDocumentsApi.data;

  return (
    <Screen style={styles.container}>
      <View>
        <FlatList
          data={dataDocuments}
          keyExtractor={(dataDocuments) =>
            dataDocuments.projeto +
            dataDocuments.caixa +
            dataDocuments.material +
            dataDocuments.lote
          }
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={"Caixa: " + item.caixa}
              subTitle={"Material: " + item.material + " - Lote: " + item.lote}
              onPress={() => navigation.navigate(routes.DOCUMENT, item)}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
});

export default DocumentsListScreen;
