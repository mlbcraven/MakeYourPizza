import { View, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text style={styles.h1}>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  h1: {
    fontWeight: "bold",
  },
});
