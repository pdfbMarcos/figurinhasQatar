import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import ProjectContext from "./app/project/context";

export default function App() {
  const [project, setProject] = useState();

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </ProjectContext.Provider>
  );
}
