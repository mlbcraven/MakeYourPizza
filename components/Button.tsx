import { View, StyleSheet, Button as RNButton, Pressable } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default function CustonButton(props: ButtonProps) {
  return (
    <View style={styles.button}>
      <RNButton title={props.title} onPress={props.onPress}></RNButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    width: "70%",
    elevation: 3,
    backgroundColor: "black",
  },
});
