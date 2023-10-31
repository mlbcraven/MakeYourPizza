import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getOrders, giveOrders, pizzaOrders } from "../Api";
import { Button, Input } from "antd";

export default function YourOrders() {
  const [orders, setOrders] = useState<pizzaOrders[]>([]);
  const [giveOrder, setGiveOrder] = useState<pizzaOrders>();
  useEffect(() => {
    async function getCurrentOrders() {
      const currentOrders = await getOrders();
      setOrders(currentOrders);
    }
    getCurrentOrders();
  }, []);
  console.log(orders);

  async function placeOrder() {
    const [orderID, setOrderID] = useState(0);
    const orderPlace = await giveOrders(orderID);
    return (
      <View>
        <Input onChange={(text) => setOrderID(parseInt(text))} />
        <Button />
      </View>
    );
  }

  return (
    <View>
      <Text>{JSON.stringify(orders)}</Text>
      <View>{placeOrder()}</View>
    </View>
  );
}
