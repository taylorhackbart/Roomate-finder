import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { CheckBox } from "react-native-elements";
import { Card, Button, DefaultTheme, RadioButton } from "react-native-paper";
import Slider from "../../../../components/Slider";

function Housing({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  const [checked, setChecked] = useState("yes");
  const [checked1, setChecked1] = useState("yes");
  const [privateRoom, setPrivateRoom] = useState("private");
  const [privateBRoom, setPrivateBRoom] = useState("private");
  const [pets, setPets] = useState("yes");
  const [residents, setResidents] = useState("1");
  const [gender, setGender] = useState("female");
// console.log(checked, checked1, privateRoom, privateBRoom, pets, residents, gender)
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Title title="Lets gather some information" />
        </Card>
        <Text> Desired age range of roommate</Text>
        <Slider />

        {/* <View style={styles.checkboxContainer}>
        <CheckBox
          center
          title="Yes"
          checked={isSelected}
          onPress={() => {
            setSelection(!isSelected);
          }}
          style={styles.checkbox}
          />
          <CheckBox
          center
          title="No"
          checked={isSelected}
          onPress={() => {
            setSelection(!isSelected);
          }}
          style={styles.checkbox}
        />
      </View> */}
        <Text> Pet Friendly?</Text>
        <View style={styles.radioContainer}>
          <View style={styles.radio}>
            <RadioButton
              value="yes"
              status={checked === "yes" ? "checked" : "unchecked"}
              onPress={() => setChecked("yes")}
              style={styles.radio}
            />
          </View>
          <Text style={styles.label}> Yes</Text>
          <View style={styles.radio}>
            <RadioButton
              value="no"
              status={checked === "no" ? "checked" : "unchecked"}
              onPress={() => setChecked("no")}
            />
          </View>
          <Text style={styles.label}> No </Text>
        </View>

        <Text> Are there pets in the home? </Text>
        <View style={styles.radioContainer}>
          <View style={styles.radio}>
            <RadioButton
              value="yes"
              status={pets === "yes" ? "checked" : "unchecked"}
              onPress={() => setPets("yes")}
              style={styles.radio}
            />
          </View>
          <Text style={styles.label}> Yes</Text>
          <View style={styles.radio}>
            <RadioButton
              value="noPets"
              status={pets === "noPets" ? "checked" : "unchecked"}
              onPress={() => setPets("noPets")}
            />
          </View>
          <Text style={styles.label}> No </Text>
        </View>

        <Text> Gender preference? </Text>
        <View style={styles.radioContainer}>
          <View style={styles.radio}>
            <RadioButton
              value="female"
              status={gender === "female" ? "checked" : "unchecked"}
              onPress={() => setGender("female")}
              style={styles.radio}
            />
          </View>
          <Text style={styles.label}> Female </Text>
          <View style={styles.radio}>
            <RadioButton
              value="male"
              status={gender === "male" ? "checked" : "unchecked"}
              onPress={() => setGender("male")}
              style={styles.radio}
            />
          </View>
          <Text style={styles.label}> Male </Text>
          <View style={styles.radio}>
            <RadioButton
              value="noPref"
              status={gender === "noPref" ? "checked" : "unchecked"}
              onPress={() => setGender("noPref")}
              style={styles.radio}
            />
          </View>
          <Text style={styles.label}> No Preference </Text>
        </View>

        <Text> Okay with couples?</Text>
        <View style={styles.radioContainer}>
          <View style={styles.radio}>
            <RadioButton
              value="yes"
              status={checked1 === "yes" ? "checked" : "unchecked"}
              onPress={() => setChecked1("yes")}
              style={styles.radio}
            />
          </View>
          <Text style={styles.label}> Yes</Text>
          <View style={styles.radio}>
            <RadioButton
              value="no"
              status={checked1 === "no" ? "checked" : "unchecked"}
              onPress={() => setChecked1("no")}
            />
          </View>
          <Text style={styles.label}> No </Text>
        </View>

        <Text> Private or shared room?</Text>
        <View style={styles.radioContainer}>
          <View style={styles.radio}>
            <RadioButton
              value="private"
              status={privateRoom === "private" ? "checked" : "unchecked"}
              onPress={() => setPrivateRoom("private")}
              style={styles.radio}
            />
          </View>
          <Text style={styles.label}> Private</Text>
          <View style={styles.radio}>
            <RadioButton
              value="shared"
              status={privateRoom === "shared" ? "checked" : "unchecked"}
              onPress={() => setPrivateRoom("shared")}
            />
          </View>
          <Text style={styles.label}> Shared </Text>
        </View>

        <Text> Private or shared bathroom?</Text>
        <View style={styles.radioContainer}>
          <View style={styles.radio}>
            <RadioButton
              value="private"
              status={privateBRoom === "private" ? "checked" : "unchecked"}
              onPress={() => setPrivateBRoom("private")}
              style={styles.radio}
            />
          </View>
          <Text style={styles.label}> Private</Text>
          <View style={styles.radio}>
            <RadioButton
              value="shared"
              status={privateBRoom === "shared" ? "checked" : "unchecked"}
              onPress={() => setPrivateBRoom("shared")}
            />
          </View>
          <Text style={styles.label}> Shared </Text>
        </View>

        <Text> How many additional people will live in the residence?</Text>
        <View style={styles.radioContainer}>
          <View style={styles.radio}>
            <RadioButton
              value="1"
              status={residents === "1" ? "checked" : "unchecked"}
              onPress={() => setResidents("1")}
              style={styles.radio}
            />
          </View>
          <Text style={styles.label}> 1</Text>
          <View style={styles.radio}>
            <RadioButton
              value="2"
              status={residents === "2" ? "checked" : "unchecked"}
              onPress={() => setResidents("2")}
            />
          </View>
          <Text style={styles.label}> 2 </Text>
          <View style={styles.radio}>
            <RadioButton
              value="3"
              status={residents === "3" ? "checked" : "unchecked"}
              onPress={() => setResidents("3")}
            />
          </View>
          <Text style={styles.label}> 3 </Text>
          <View style={styles.radio}>
            <RadioButton
              value="4"
              status={residents === "4" ? "checked" : "unchecked"}
              onPress={() => setResidents("4")}
            />
          </View>
          <Text style={styles.label}> 4+ </Text>
        </View>
        {/* <Card style={styles.card}>
        <Card.Content>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Housing")}
          >
            Filters
          </Button>
        </Card.Content>
      </Card> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: DefaultTheme.colors.background,
    alignItems: "center",
    paddingTop: 10,
    marginBottom: "15%",
  },
  card: {
    width: "90%",
    margin: "10%",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  radio: {
    backgroundColor: "#5200ee",
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
  },
  radioContainer: {
    margin: "5%",
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
  },
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10,
  },
});

export default Housing;
