import { StyleSheet, useColorScheme, Pressable, Text } from "react-native";

export default function CustomButton(props) {

  const colorScheme = useColorScheme(); // device color mode: dark / light

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: colorScheme === 'dark' ? '#fa2' : '#fa2', // example, we change the bg
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
  
  return (
    <Pressable style={styles.button}>
        <Text style={styles.text}>
            {props.children}
        </Text>
    </Pressable>
  );
}
