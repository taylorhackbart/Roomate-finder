import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import HomeScreen from "./pages/Welcome/index.js";
import BookScreen from "./pages/Welcome/BookScreen";
import NameScreen from "./pages/Welcome/NameScreen";
import TitleScreen from "./pages/Welcome/Title";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerRight: () => (
                  <IconButton
                    icon="alert-outline"
                    onPress={() => alert("You're awesome!")}
                    color={DefaultTheme.colors.notification}
                  />
                ),
              }}
            />
            <Stack.Screen name="Book" component={BookScreen} />
            <Stack.Screen name="Name" component={NameScreen} />
            <Stack.Screen
              name="Title"
              component={TitleScreen}
              options={({ route }) => ({ title: route.params.title })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
