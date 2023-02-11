import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Item from "./Item";

const TouchableItem = ({image, userInput, settingChoice, choice}) => {
  return (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => {
        settingChoice(!choice)
        userInput(image);
      }}
    >
      <Item image={image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 130,
  },
  button: {},
});

export default TouchableItem;
