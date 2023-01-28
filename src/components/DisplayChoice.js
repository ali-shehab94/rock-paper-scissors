import { StyleSheet, Text, View } from "react-native"
import TouchableItem from "./TouchableItem"
import Item from "./Item"

const DisplayChoice = () => {
  return (
    <View style={styles.container}>
      <Item image={0} />
    </View>
  )
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