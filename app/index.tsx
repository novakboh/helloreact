import { View, Text, FlatList, TextInput, TouchableOpacity, Image } from "react-native";
import { useEffect, useState } from "react";
import styles from "../ui/styles";
import { fetchPlants, fetchFamilies } from "../services/trefle";
import { useRouter } from "expo-router";

export default function Home() {
  const [plants, setPlants] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [family, setFamily] = useState("");
  const [edible, setEdible] = useState(false);
  const [families, setFamilies] = useState([]);
  const [showFamilies, setShowFamilies] = useState(false);
  const router = useRouter();

  async function load(reset = false) {
    const data = await fetchPlants(query, page, family || undefined, edible);
    setPlants(reset ? data : [...plants, ...data]);
  }

  useEffect(() => {
    fetchFamilies().then(setFamilies);
    load(true);
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Plant Catalog</Text>

      <TextInput style={styles.input} placeholder="Search..." value={query} onChangeText={setQuery} />

      <TouchableOpacity style={styles.button} onPress={() => { setPage(1); load(true); }}>
        <Text style={{ color: "white" }}>Apply filters</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.input, { justifyContent: "center" }]} onPress={() => setShowFamilies(!showFamilies)}>
        <Text>
          {family ? family : "All families"}
        </Text>
      </TouchableOpacity>

      {showFamilies && (
        <View style={{ maxHeight: 200, backgroundColor: "white", borderRadius: 8 }}>
          <FlatList
            data={families}
            keyExtractor={(i) => String(i.id)}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => {
                  setFamily(item.name);
                  setShowFamilies(false);
                  setPage(1);
                  load(true);
                }}
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      
      <TouchableOpacity onPress={() => setEdible(!edible)}>
        <Text>{edible ? "✓ Edible only" : "Show all"}</Text>
      </TouchableOpacity>

      <FlatList
        data={plants}
        keyExtractor={i => String(i.id)}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => router.push(`/plant/${item.id}`)}>
            <Image source={{ uri: item.image_url }} style={styles.img} />
            <View style={styles.cardText}>
              <Text>{item.common_name}</Text>
              <Text>{item.scientific_name}</Text>
            </View>
          </TouchableOpacity>
        )}
        onEndReached={() => {
          setPage(page + 1);
          load();
        }}
      />
    </View>
  );
}