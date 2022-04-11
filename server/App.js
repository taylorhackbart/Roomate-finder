import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Welcome/Login";
import Welcome from "./pages/Welcome/Welcome.js";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const Stack = createStackNavigator();
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
export default function App() {
  useEffect(() => {
    setTimeout(() => SplashScreen.hideAsync(), 2000);
  }, []);
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="home" component={Welcome} />
            <Stack.Screen name="login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>

        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
