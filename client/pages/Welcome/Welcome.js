import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import AppButton from "../../components/AppButton";
import Login from "./Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function Welcome({navigation}) {
  return (
    <View style={styles.container}>

      {/* <Stack.Navigator> */}
        {/* <AppButton title="Login"> */}
          {/* <Stack.Screen name="Login" component={Login} options={{headerTitle: props => <AppButton {...props} title="Login" />}}  /> */}
        {/* </AppButton> */}
      {/* </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name = "Login" component={Login} />
      </Tab.Navigator>
      {/* <AppButton
      title="Login"
      onPress={() =>
        navigation.navigate('Login')
      }
    /> */}


      <AppButton title="Register" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});
export default Welcome;
