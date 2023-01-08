import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Item = (props) => {
  const imageSrc = props.image;

  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity>
        <Image source={imageSrc} resizeMode="contain" style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 190,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 180,
  },
});

export default Item;
