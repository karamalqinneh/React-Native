import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Text
        style={{ margin: 16, borderWidth: 1, borderColor: "red", padding: 16 }}
      >
        World
      </Text>
      <Button title="IOS Button" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
