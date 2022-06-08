import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import colors from "../config/colors";
import documentApi from "../api/document";
import Screen from "../components/Screen";
import Text from "../components/Text";
import { Form, FormField, SubmitButton } from "../components/forms";
import { ListItemSeparator } from "../components/lists";

const validationSchema = Yup.object().shape({
  dtCaptura: Yup.string()
    .required()
    .max(10)
    .min(10)
    .label("Data da digitalização"),
  lotePDF: Yup.string().required().label("LotePDF"),
  qtdPag: Yup.string().required().label("Páginas"),
  doctoFP: Yup.string().required().label("Fazer fotos"),
});

function DigDocumentScreen({ route }) {
  const document = route.params;
  const params =
    "/" +
    document.projeto +
    "/" +
    document.caixa +
    "/" +
    document.material +
    "/" +
    document.lote;

  const handleSubmit = async (document, { resetForm }) => {
    const result = await documentApi.updDocument(document, params);

    if (!result.ok) {
      return alert("Could not save the document!" + result.originalError);
    }
    alert("Success!");

    resetForm();
  };

  const today = new Date().toJSON().slice(0, 10).replace(/-/g, "-");

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          dtCaptura: today,
          lotePDF: "",
          qtdPag: "",
          doctoFP: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          defaultValue={today}
          icon="calendar"
          name="dtCaptura"
          placeholder="Data da digitalização"
          width={180}
        />
        <FormField
          autoCorrect={false}
          icon="sitemap"
          keyboardType="numeric"
          name="lotePDF"
          placeholder="LotePDF"
          width={180}
        />
        <FormField
          autoCorrect={false}
          icon="file-document-outline"
          keyboardType="numeric"
          name="qtdPag"
          placeholder="Páginas"
          width={180}
        />
        <FormField
          autoCorrect={false}
          icon="image-outline"
          name="doctoFP"
          placeholder="Fazer foto?"
          width={180}
        />
        <ListItemSeparator />
        <View style={styles.viewInfo}>
          <Text>Caixa: {document.caixa}</Text>
          <Text>Material: {document.material}</Text>
          <Text>Lote: {document.lote}</Text>
          <Text>Projeto: {document.projeto}</Text>
        </View>
        <ListItemSeparator />
        <SubmitButton title="Atualizar documento" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  viewInfo: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 35,
  },
});

export default DigDocumentScreen;
