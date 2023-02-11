import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { determineWinner } from "../services/DetermineWinner";

const Result = ({computerChoice,
  userChoice,
  updateUserScore,
  updateComputerScore,
  computerScore,
  userScore
}) => {

  const [result, setResult] = React.useState("");

    React.useEffect(()=> {
      const winner = determineWinner(userChoice, computerChoice);
      setResult(winner);
      if (winner == "Computer Wins") {
        updateComputerScore(computerScore + 1);
      }
      if (winner == "User Wins") {
        updateUserScore(userScore + 1)
      }
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
