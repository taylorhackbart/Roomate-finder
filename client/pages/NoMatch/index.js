import React from "react";
import {Text, View, StyleSheet} from "react-native"

function NoMatch() {
  return (
    <View style={styles.container}>
      <Text>
        {" "}
        404 PAGE NOT FOUND{" "}
      </Text>
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
export default NoMatch;
