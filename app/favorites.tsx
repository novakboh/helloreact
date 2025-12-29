import { View, FlatList, Text, Image } from "react-native";
import { useEffect, useState } from "react";
import { getFavorites } from "../storage/favorites";

export default function Favorites() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getFavorites().then(setItems);
  }, []);

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={i => String(i.id)}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Image source={{ uri: item.image_url }} style={{ width: 60, height: 60 }} />
            <Text>{item.common_name}</Text>
          </View>
        )}
      />
    </View>
  );
}