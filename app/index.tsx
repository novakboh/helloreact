import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

function TopBar() {
  return (
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
  )
}

function MainScreen() {
  return (
    <View style={{ flex: 1 }}>
      <TopBar/>
      <View style={styles.screen}>
        <Text>Home!</Text>
      </View>
    </View>
  )
}

function FavouriteScreen() {
  return (
    <View style={{ flex: 1 }}>
      <TopBar/>
      <View style={styles.screen}>
        <Text>Favourite!</Text>
      </View>
    </View>
  )
}

function CreateScreen() {
  return (
    <View style={{ flex: 1 }}>
      <TopBar/>
      <View style={styles.screen}>
        <Text>Create!</Text>
      </View>
    </View>
  )
}

function ChatScreen() {
  return (
    <View style={{ flex: 1 }}>
      <TopBar/>
      <View style={styles.screen}>
        <Text>Chat!</Text>
      </View>
    </View>
  )
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1 }}>
      <TopBar/>
      <View style={styles.screen}>
        <Text>Profile!</Text>
      </View>
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: styles.bottomBar,
          tabBarLabelStyle: { fontSize: 12, marginBottom: 5 },

          tabBarIcon: ({ focused }) => {
            let icon;

            if (route.name === 'Home')
              icon = require('../assets/images/home.png');
            if (route.name === 'Favourite')
              icon = require('../assets/images/heart.jpg');
            if (route.name === 'Create')
              icon = require('../assets/images/plus.png');
            if (route.name === 'Chat')
              icon = require('../assets/images/chat.png');
            if (route.name === 'Profile')
              icon = require('../assets/images/profile.png');

            return (
              <Image
                source={icon}
                style={{
                  width: 22,
                  height: 22,
                  opacity: focused ? 1 : 0.4,
                }}
              />
            );
          },

          tabBarActiveTintColor: '#00424A',
          tabBarInactiveTintColor: '#A0A0A0',
        })}
      >
        <Tab.Screen name="Home" component={MainScreen} options={{ title: 'Головна' }} />
        <Tab.Screen name="Favourite" component={FavouriteScreen} options={{ title: 'Вибране' }} />
        <Tab.Screen name="Create" component={CreateScreen} options={{ title: 'Створити' }} />
        <Tab.Screen name="Chat" component={ChatScreen} options={{ title: 'Чат' }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Профіль' }} />
      </Tab.Navigator>
    </NavigationContainer>
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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