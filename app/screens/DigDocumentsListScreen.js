import React, { useContext, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import documentApi from "../api/document";
import ProjectContext from "../project/context";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import { ListItem, ListItemSeparator } from "../components/lists";
import { Form, FormField, SubmitButton } from "../components/forms";

function DigDocumentsListScreen({ navigation }) {
  const { project } = useContext(ProjectContext);

  const getDocumentsApi = useApi(documentApi.getDocuments);

  useEffect(() => {
    getDocumentsApi.request("/" + project + "/dig");
  }, []);

  const dataDocuments = getDocumentsApi.data;

  const handleRefresh = async ({ caixa }) => {
    getDocumentsApi.request("/" + project + "/" + caixa + "/dig");
  };

  return (
    <Screen>
      <Form
        initialValues={{
          caixa: "",
        }}
        onSubmit={handleRefresh}
      >
        <View style={styles.container}>
          <FormField
            autoCapitalize="characters"
            autoCorrect={false}
            icon="archive"
            name="caixa"
            placeholder="caixa"
            width={180}
          />
          <SubmitButton marginLeft={5} title="Filtrar" width={175} />
        </View>
        <ListItemSeparator />
        <ListItemSeparator />
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
                subTitle={
                  "Material: " + item.material + " - Lote: " + item.lote
                }
                onPress={() => navigation.navigate(routes.DIGDOCUMENTS, item)}
              />
            )}
          />
        </View>
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginLeft: 15 },
});

export default DigDocumentsListScreen;
