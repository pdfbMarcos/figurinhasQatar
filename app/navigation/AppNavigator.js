import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProcessScreen from "../screens/ProcessScreen";
import DigDocumentsListScreen from "../screens/DigDocumentsListScreen";
import AddDocumentScreen from "../screens/AddDocumentScreen";
import DigDocumentScreen from "../screens/DigDocumentScreen";
import ReprepDocumentListScreen from "../screens/ReprepDocumentListScreen";
import ReprepDocumentScreen from "../screens/ReprepDocumentScreen";
import DocumentsListScreen from "../screens/DocumentsListScreen";
import DocumentScreen from "../screens/DocumentScreen.js";
import WelcomeScreen from "../screens/WelcomeScreen";
import SourceDocumentsListScreen from "../screens/SourceDocumentsListScreen";
import CheckDocumentBoxListScreen from "../screens/CheckDocumentBoxListScreen";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={WelcomeScreen} />
    <Stack.Screen name="Menu" component={ProcessScreen} />
    <Stack.Screen
      name="Lista Digitalização"
      component={DigDocumentsListScreen}
    />
    <Stack.Screen name="Preparação" component={AddDocumentScreen} />
    <Stack.Screen name="Digitalização" component={DigDocumentScreen} />
    <Stack.Screen
      name="Lista Repreparação"
      component={ReprepDocumentListScreen}
    />
    <Stack.Screen name="Repreparação" component={ReprepDocumentScreen} />
    <Stack.Screen name="Lista Documentos" component={DocumentsListScreen} />
    <Stack.Screen name="Documento" component={DocumentScreen} />
    <Stack.Screen name="Lista Planilha" component={SourceDocumentsListScreen} />
    <Stack.Screen
      name="Conferencia de caixas"
      component={CheckDocumentBoxListScreen}
    />
  </Stack.Navigator>
);

export default AppNavigator;
