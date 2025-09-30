import { Background } from '@react-navigation/elements';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.topIconContainer}>
            <Image style={styles.topIcon} source={require('../assets/images/menu.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.topIconContainer}>
            <Image style={styles.topIcon} source={require('../assets/images/calculator.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.screen}>
          <Text style={styles.bigText}>0</Text>
        </View>
        
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#5b5b5b'}]}><Text style={styles.text}>⌫</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#5b5b5b'}]}><Text style={styles.text}>AC</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#5b5b5b'}]}><Text style={styles.text}>%</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#ff9201'}]}><Text style={styles.opText}>÷</Text></TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#303030'}]}><Text style={styles.text}>7</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#303030'}]}><Text style={styles.text}>8</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#303030'}]}><Text style={styles.text}>9</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#ff9201'}]}><Text style={styles.opText}>×</Text></TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#303030'}]}><Text style={styles.text}>4</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#303030'}]}><Text style={styles.text}>5</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#303030'}]}><Text style={styles.text}>6</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#ff9201'}]}><Text style={styles.opText}>−</Text></TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#303030'}]}><Text style={styles.text}>1</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#303030'}]}><Text style={styles.text}>2</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#303030'}]}><Text style={styles.text}>3</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#ff9201'}]}><Text style={styles.opText}>+</Text></TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#303030'}]}><Image style={styles.topIcon} source={require('../assets/images/+-.png')} /></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#303030'}]}><Text style={styles.text}>0</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#303030'}]}><Text style={styles.text}>,</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#ff9201'}]}><Text style={styles.opText}>=</Text></TouchableOpacity>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 14,
    justifyContent: 'flex-end',
    paddingBottom: 28
  },
  topBar: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  topIconContainer: {
    backgroundColor: '#191919',
    width: 45,
    height: 45,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4c4c4c'
  },
  topIcon: {
    width: 30, 
    height: 30, 
    tintColor: '#ffffff'
  },
  screen: {
    marginBottom: 16,
    paddingHorizontal: 8
  },
  smallText: {
    color: '#9aa0a6',
    fontSize: 18,
    textAlign: 'right'
  },
  bigText: {
    color: '#ffffff',
    fontSize: 90,
    textAlign: 'right',
    fontWeight: '400',
    lineHeight: 100
  },

  row: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center'
  },
  button: {
    flex: 1,
    height: 90,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#4c4c4c'
  },

  digitButton: {
    backgroundColor: '#303030'
  },
  funcButton: {
    backgroundColor: '#5b5b5b'
  },
  opButton: {
    backgroundColor: '#ff9201'
  },

  text: {
    color: '#ffffff',
    fontSize: 36
  },
  opText: {
    color: '#ffffff',
    fontSize: 56
  }
});