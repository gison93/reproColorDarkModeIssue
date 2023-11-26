import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, useColorScheme, Pressable, Text } from "react-native";
import CustomButton from "./CustomButton";

export default function App() {

  const colorScheme = useColorScheme(); // device color mode: dark / light

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#000' : '#fff', // example, we change the bg
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
  return (
    <View style={styles.container}>
      <CustomButton> {/* Buttons are really limited, use Pressable for more control */}
        Click me!
      </CustomButton>
      <StatusBar style="auto" />
    </View>
  );
}
