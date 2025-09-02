import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerTitle: "Welcome", headerShown:false}} />
    </Stack>
  );
}