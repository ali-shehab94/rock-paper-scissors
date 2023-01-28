import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import DisplayChoice from "./src/components/DisplayChoice";
import TouchableItem from "./src/components/TouchableItem";
import Result from "./src/components/Result";
import { useState } from "react";
import Something from "./src/components/Something";

export default function App() {

  const [userChoice, setUserChoice] = useState(0);

  const getUserInput = (input) => {
    console.log(input);
  };

  const getData = (data) => {
    console.log("the data ", data)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <DisplayChoice image={userChoice} />
        <Something onPress={getData}/>
        <Result />
        <DisplayChoice image={userChoice} />
        <View style={styles.options}>
          <TouchableItem image={0} userInput={getUserInput}/>
          <TouchableItem image={1} />
          <TouchableItem image={2} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fffb00",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fffb00",
    alignItems: "center",
    justifyContent: "center",

  },
  options: {
    flex: 1,
    justifyContent: "space-evenly",
    width: '100%',
    display: 'flex',
    flexDirection: "row",
    paddingHorizontal: "4%",
  },
});
