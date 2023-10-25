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
import Menu from "../screens/Menu";
import News from "../screens/News";
import Toppings from "../screens/Toppings";
import Offers from "../screens/Offers";
import AboutUs from "../screens/AboutUs";
import Information from "../screens/Information";

const Drawer = createDrawerNavigator();

export function SideBar() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen name="News" component={News} />
      <Drawer.Screen name="Toppings" component={Toppings} />
      <Drawer.Screen name="Offers" component={Offers} />
      <Drawer.Screen name="Informations" component={Information} />
      <Drawer.Screen name="About Us" component={AboutUs} />
    </Drawer.Navigator>
  );
}

export default function Navbar() {
  const navigation: any = useNavigation();
  return (
    <View style={styles.navBar}>
      {<SideBar />}
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
