import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Item from './src/components/Item';

export default function App() {

  const images = [require("./assets/rock.png"), require("./assets/paper.png"), require("./assets/scissors.png")]
  console.log(images[0]);

  return (
    <View style={styles.container}>
      
      <Item image={images[2]}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffb00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
