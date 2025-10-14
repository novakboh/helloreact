import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.searchBox}>
          <Image style={styles.icon} source={require('../assets/images/search.png')} />
          <TextInput
            style={styles.searchInput}
            placeholder="Що шукаєте?"
            placeholderTextColor="#A0A0A0"
          />
        </View>
        <Image style={styles.bellIcon} source={require('../assets/images/notification.png')} />
      </View>

      <View style={styles.content}></View>

      <View style={styles.bottomBar}>
        <View style={styles.navItem}>
          <Image style={styles.icon} source={require('../assets/images/home.png')} />
          <Text style={styles.navTextActive}>Головна</Text>
        </View>

        <View style={styles.navItem}>
          <Image style={styles.icon} source={require('../assets/images/heart.jpg')} />
          <Text style={styles.navText}>Вибране</Text>
        </View>

        <View style={styles.navItem}>
          <Image style={styles.icon} source={require('../assets/images/plus.png')} />
          <Text style={styles.navText}>Створити</Text>
        </View>

        <View style={styles.navItem}>
          <Image style={styles.icon} source={require('../assets/images/chat.png')} />
          <Text style={styles.navText}>Чат</Text>
        </View>

        <View style={styles.navItem}>
          <Image style={styles.icon} source={require('../assets/images/profile.png')} />
          <Text style={styles.navText}>Профіль</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 55,
    paddingBottom: 10,
    backgroundColor: '#f3f4f6',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    flex: 1,
    marginRight: 12,
    height: 36,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#000',
    marginLeft: 6,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  bellIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 0.3,
    borderColor: '#f3f4f6',
    backgroundColor: '#fff',
    height: 70,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#00424A',
    marginTop: 4,
  },
  navTextActive: {
    fontSize: 12,
    color: '#00424A',
    fontWeight: 'bold',
    marginTop: 4,
  },
});