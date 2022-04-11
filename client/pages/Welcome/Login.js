import React from "react";
import {Text, View, StyleSheet} from "react-native"
import AppButton from "../../components/AppButton"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
function Login() {
  return (

    <View style={styles.container}>
  <Text> Made it</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
})
export default Login;
