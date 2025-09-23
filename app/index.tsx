import { View, Text, StyleSheet } from 'react-native';
 
export default function HomeScreen() {
  return (
    <View>
      <Text style={styles.text} >Hello</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  text: {
    backgroundColor: 'red',
    fontSize: 20,
  }
});