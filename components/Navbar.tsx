import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import SideBar from "./SideBar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Bar() {
  const navigation: any = useNavigation();

  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          style={styles.image}
          source={require("../assets/icons8-menu-50.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <Text>Make Your Pizza</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ShoppingCart")}>
        <Image
          style={styles.image}
          source={require("../assets/icons8-cart-80.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

export default function Navbar() {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <Bar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: { height: 25, width: 25 },
  navBar: {
    flexDirection: "row",
    top: 20,
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
