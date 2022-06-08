import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import documentApi from "../api/document";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import { ListItem, ListItemSeparator } from "../components/lists";

function ReprepDocumentsListScreen({ navigation }) {
  const getDocumentsApi = useApi(documentApi.getDocuments);

  useEffect(() => {
    getDocumentsApi.request("/inovatgq/rep");
  }, []);

  const dataDocuments = getDocumentsApi.data;

  return (
    <Screen style={styles.container}>
      <View>
        <FlatList
          data={dataDocuments}
          keyExtractor={(dataDocuments) =>
            dataDocuments.caixa + dataDocuments.material + dataDocuments.lote
          }
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={"Caixa: " + item.caixa}
              subTitle={"Material: " + item.material + " - Lote: " + item.lote}
              onPress={() => navigation.navigate(routes.REPREPDOCUMENT, item)}
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

export default ReprepDocumentsListScreen;
