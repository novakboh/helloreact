import { View, Text, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { fetchPlant } from "../../services/trefle";
import styles from "../../ui/styles";
import { toggleFavorite } from "../../storage/favorites";

export default function Plant() {
  const { id } = useLocalSearchParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetchPlant(id).then(setPlant);
  }, []);

  if (!plant) return null;

  return (
    <View style={styles.screen}>
      <Image source={{ uri: plant.image_url }} style={{ width: "100%", height: 200 }} />
      <Text style={styles.title}>{plant.common_name}</Text>
      <Text>{plant.scientific_name}</Text>
      <Text>Family: {plant.family}</Text>
      <Text>Edible: {plant.edible ? "Yes" : "No"}</Text>

      <TouchableOpacity style={styles.button} onPress={() => toggleFavorite(plant)}>
        <Text style={{ color: "white" }}>Add to favorites</Text>
      </TouchableOpacity>
    </View>
  );
}