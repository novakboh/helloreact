import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screen: { flex: 1, padding: 12, backgroundColor: "#F8F6E9" },
  title: { fontSize: 24, fontWeight: "600", marginBottom: 10 },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 6
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 12,
    overflow: "hidden"
  },
  img: { width: "100%", height: 160 },
  cardText: { padding: 10 },
});