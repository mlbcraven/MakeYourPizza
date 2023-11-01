import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { pizza } from "../Api";

export default function Toppings() {
  const [orders, setOrders] = useState<pizza>();

  function giveOrder() {
    return;
  }

  return (
    <View>
      <Text></Text>
    </View>
  );
}
