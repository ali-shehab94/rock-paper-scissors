import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { determineWinner } from "../services/DetermineWinner";

const Result = ({computerChoice, userChoice}) => {

  const [result, setResult] = React.useState("");

    React.useEffect(()=> {
      const winner = determineWinner(userChoice, computerChoice);
      setResult(winner);
    }, [computerChoice, userChoice])

  return (
    <View style={styles.container}>
      <Text>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "10%",
    marginVertical: "5%",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "black",
  },
});

export default Result;
