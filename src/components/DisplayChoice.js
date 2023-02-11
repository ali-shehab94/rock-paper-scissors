import { StyleSheet, Text, View } from "react-native"
import TouchableItem from "./TouchableItem"
import Item from "./Item"

const DisplayChoice = ({imageNumber}) => {
  return (
    <View style={styles.container}>
      <Item image={imageNumber} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: 'black'
  }
})

export default DisplayChoice