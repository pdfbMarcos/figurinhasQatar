import React from "react";
import { StyleSheet, FlatList } from "react-native";
import * as Yup from "yup";

import Icon from "../components/Icon";
import Screen from "../components/Screen";
import { Form } from "../components/forms";
import { ListItemBasic } from "../components/lists";

const validationSchema = Yup.object().shape({
  dtCaptura: Yup.string()
    .required()
    .max(10)
    .min(10)
    .label("Data da digitalização"),
  lotePDF: Yup.string().required().label("LotePDF"),
  qtdPag: Yup.string().required().label("Páginas"),
});

function DocumentScreen({ route }) {
  const document = route.params;

  const dataDocument = [
    {
      title: "Projeto:",
      icon: {
        name: "account-check",
      },
      value: document.projeto,
    },
    {
      title: "Caixa:",
      icon: {
        name: "archive",
      },
      value: document.caixa,
    },
    {
      title: "Material:",
      icon: {
        name: "beaker-outline",
      },
      value: document.material,
    },
    {
      title: "Lote:",
      icon: {
        name: "data-matrix",
      },
      value: document.lote,
    },
    {
      title: "Lote Controle:",
      icon: {
        name: "check-all",
      },
      value: document.loteCTRL,
    },
    {
      title: "Preparacão:",
      icon: {
        name: "calendar-cursor",
      },
      value: document.dtPreparacao,
    },
    {
      title: "Digitalização:",
      icon: {
        name: "calendar-import",
      },
      value: document.dtCaptura,
    },
    {
      title: "Tem foto?",
      icon: {
        name: "file-image-plus-outline",
      },
      value: document.doctoFP,
    },
    {
      title: "Qtde fotos:",
      icon: {
        name: "image-outline",
      },
      value: document.qtdImg,
    },
    {
      title: "Páginas:",
      icon: {
        name: "file-document-outline",
      },
      value: document.qtdPag,
    },
    {
      title: "Lote PDF:",
      icon: {
        name: "sitemap",
      },
      value: document.lotePDF,
    },
    {
      title: "re-Preparação:",
      icon: {
        name: "calendar-end",
      },
      value: document.dtReprep,
    },
    {
      title: "Caixa PDF:",
      icon: {
        name: "archive-check",
      },
      value: document.caixaPDF,
    },
    {
      title: "Entrega:",
      icon: {
        name: "calendar-check",
      },
      value: document.entrega,
    },
  ];

  return (
    <Screen style={styles.container}>
      <Form initialValues={{}} validationSchema={validationSchema}>
        <FlatList
          data={dataDocument}
          keyExtractor={(dataDocument) => dataDocument.title}
          renderItem={({ item }) => (
            <ListItemBasic
              title={item.title + " " + item.value}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
});

export default DocumentScreen;
