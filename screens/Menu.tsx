import { useState } from "react";
import { View, Text } from "react-native";
import { pizza, purchase } from "../Api";
import { Button } from "native-base";
import PizzaCard from "../components/PizzaCard";

const pizzaMenu: pizza[] = [
  { name: "Hawai", size: "Medium", toppings: [{ name: "Feta", price: 1 }] },
  { name: "Greek", size: "Large", toppings: [{ name: "Sause", price: 2 }] },
  { name: "Danish", size: "Small", toppings: [{ name: "Peperoni", price: 3 }] },
];

export default function Menu() {
  const [cart, setCart] = useState<pizza[]>([]);

  async function placeOrder() {
    const order = setCart(await purchase(pizzaMenu));
    return order;
  }

  function renderMenu() {
    return (
      <View>
        {pizzaMenu.map((v, index) => (
          <PizzaCard key={index} title={v.name} pizza={v} />
        ))}
      </View>
    );
  }

  return (
    <View>
      <Text>Menu</Text>
      <Button onPress={() => placeOrder()} />
    </View>
  );
}
