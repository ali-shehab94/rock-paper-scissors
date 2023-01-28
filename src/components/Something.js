import { Text, TouchableOpacity, View } from "react-native";

const Something = (props) => {

    const sendData = (e) => {
        console.log(e.target.value)
    }

  return (
    <View>
      <TouchableOpacity onPress={sendData}>
        <Text>Something</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Something;
