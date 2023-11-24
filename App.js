import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button color="gold" title="Click Me"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
