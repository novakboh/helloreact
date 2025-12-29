import AsyncStorage from "@react-native-async-storage/async-storage";
const KEY = "favorites";

export async function getFavorites() {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export async function toggleFavorite(plant) {
  const favs = await getFavorites();
  const exists = favs.find(p => p.id === plant.id);

  const updated = exists
    ? favs.filter(p => p.id !== plant.id)
    : [...favs, plant];

  await AsyncStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
}