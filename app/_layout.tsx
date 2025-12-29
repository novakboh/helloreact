import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#F8F6E9" },
        headerTitleStyle: { fontWeight: "600" },
      }}
    />
  );
}