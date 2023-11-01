import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getOrders, pizza } from "../Api";
import { Box, Button } from "native-base";

export default function YourOrders() {
  const [orders, setOrders] = useState<pizza[]>([]);
  useEffect(() => {
    async function getCurrentOrders() {
      const currentOrders = await getOrders();
      setOrders(currentOrders);
    }
    getCurrentOrders();
  });

  return (
    <View>
      <Text>{JSON.stringify(orders)}</Text>
      <Box alignItems="center">
        <Button onPress={() => console.log("hello world")}>Click Me</Button>
      </Box>
    </View>
  );
}
