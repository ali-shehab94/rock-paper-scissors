import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import DisplayChoice from "./src/components/DisplayChoice";
import TouchableItem from "./src/components/TouchableItem";
import Result from "./src/components/Result";
import React, { useEffect, useState } from "react";
import Something from "./src/components/Something";
import { calculateRandomIndex } from "./src/services/RandomIndexGenerator";

export default function App() {

  const [userChoice, setUserChoice] = useState(0);
  const [computerChoice, setComputerChoice] = useState(0);
  const [choice, setChoice] = useState(false);

  useEffect(()=>{
    setComputerChoice(calculateRandomIndex(1, 2));
  },[choice])


  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <DisplayChoice imageNumber={userChoice} />
        <Result 
        userChoice = {userChoice}
        computerChoice = {computerChoice}
        />
        <DisplayChoice imageNumber={computerChoice} />
        <View style={styles.options}>
          <TouchableItem
            image={0}
            userInput={setUserChoice}
            settingChoice={setChoice}
            choice={choice}
          />
          <TouchableItem
            image={1}
            userInput={setUserChoice}
            settingChoice={setChoice}
            choice={choice}
          />
          <TouchableItem
            image={2}
            userInput={setUserChoice}
            settingChoice={setChoice}
            choice={choice}
          />
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
