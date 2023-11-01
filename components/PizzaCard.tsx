import { View, Text, StyleSheet, Image } from "react-native";
import { pizza } from "../Api";
import { Box } from "native-base";

interface PizzaCardProps {
  title: string;
  pizza: pizza;
}

export default function PizzaCard(props: PizzaCardProps) {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>

      <Text>{props.pizza.name}</Text>
      <Text>{props.pizza.size}</Text>
      <Box>
        {props.pizza.toppings.map((t) => (
          <Text>{t.name}</Text>
        ))}
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  image: {
    marginBottom: 20,
  },
});
