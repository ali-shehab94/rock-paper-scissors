import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Item = (props) => {
  const images = [
    require("../../assets/rock.png"),
    require("../../assets/paper.png"),
    require("../../assets/scissors.png"),
  ];

  return (
    <View style={styles.imageContainer}>
        <Image source={images[props.image]} resizeMode="contain" style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 140,
    height: 140,
  },
});

export default Item;
