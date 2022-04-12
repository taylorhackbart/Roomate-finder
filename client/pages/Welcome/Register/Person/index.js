import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Button } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";

function Person({navigation}) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Do you have a room to rent out or are you looking for a room?" />
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Person")}
          >
            Filters
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Housing")}
          >
            Filters
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: DefaultTheme.colors.background,
    alignItems: "center",
    paddingTop: 10,
  },
  card: {
    width: "90%",
  },
});

export default Person;
