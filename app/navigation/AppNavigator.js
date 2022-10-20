import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "../screens/MainScreen";
import DetailScreen from "../screens/DetailScreen";
import SwapScreen from "../screens/SwapScreen";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Grupos" component={MainScreen} />
    <Stack.Screen name="Figurinhas" component={DetailScreen} />
    <Stack.Screen name="Repetidas" component={SwapScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
