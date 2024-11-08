import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { colors } from "./styles/global";
import Navigation from "./src/navigation/navigation";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    <ActivityIndicator color={colors.orange} />;
  }

  return (
    <Provider store={store.store}>
      <PersistGate
        loading={<ActivityIndicator color={colors.orange} />}
        persistor={store.persistor}
      >
        <NavigationContainer>
          <Navigation />
          <StatusBar style="auto" />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
