import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "../screens/MainScreen";
import DocumentsListScreen from "../screens/DocumentsListScreen";
import AddDocumentScreen from "../screens/AddDocumentScreen";
import DigDocumentScreen from "../screens/DigDocumentScreen";
import ReprepDocumentListScreen from "../screens/ReprepDocumentListScreen";
import ReprepDocumentScreen from "../screens/ReprepDocumentScreen";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={MainScreen} />
    <Stack.Screen name="Lista Digitalização" component={DocumentsListScreen} />
    <Stack.Screen name="Preparação" component={AddDocumentScreen} />
    <Stack.Screen name="Digitalização" component={DigDocumentScreen} />
    <Stack.Screen
      name="Lista Repreparação"
      component={ReprepDocumentListScreen}
    />
    <Stack.Screen name="Repreparação" component={ReprepDocumentScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
