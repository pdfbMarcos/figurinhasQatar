import React, { useContext, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import sourceDocumentApi from "../api/sourceDocuments";
import ProjectContext from "../project/context";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import { ListItem, ListItemSeparator } from "../components/lists";
import { Form, FormField, SubmitButton } from "../components/forms";

function SourceDocumentsListScreen({ navigation }) {
  const { project } = useContext(ProjectContext);

  const getSourceDocumentsApi = useApi(sourceDocumentApi.getSourceDocuments);
  useEffect(() => {
    getSourceDocumentsApi.request("/" + project);
  }, []);

  const dataSourceDocuments = getSourceDocumentsApi.data;

  const handleRefresh = async ({ caixa }) => {
    getSourceDocumentsApi.request("/" + project + "/" + caixa);
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
            data={dataSourceDocuments}
            keyExtractor={(dataSourceDocuments) =>
              dataSourceDocuments.caixa +
              dataSourceDocuments.material +
              dataSourceDocuments.lote
            }
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item }) => (
              <ListItem
                title={"Caixa: " + item.caixa}
                subTitle={
                  "Material: " + item.material + " - Lote: " + item.lote
                }
                onPress={() => navigation.navigate(routes.ADDDOCUMENTS, item)}
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

export default SourceDocumentsListScreen;
