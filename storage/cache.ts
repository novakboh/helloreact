import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveCache(key, data) {
  await AsyncStorage.setItem(key, JSON.stringify(data));
}

export async function loadCache(key) {
  const data = await AsyncStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}