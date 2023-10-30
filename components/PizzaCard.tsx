import { View, Text, StyleSheet, Image } from "react-native";

interface PizzaCardProps {
  title: string;
  img: string;
  information: string;
  isVegan: boolean;
  isNew: boolean;
  isSpicy: boolean;
  isPremium: boolean;
}

export default function PizzaCard(props: PizzaCardProps) {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <Image
        style={styles.image}
        source={require(`../assets/pizzas/${props.img}`)}
      />
      <Text>{props.information}</Text>
      {props.isSpicy}
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
