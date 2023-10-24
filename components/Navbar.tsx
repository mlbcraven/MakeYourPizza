import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import { ListItem } from "@rneui/base";
import Menu from "../screens/Menu";
import News from "../screens/News";

export enum colors {
  purple = "#4040a1",
  beige = "#fefbd8",
  green = "#618685",
  blackish = "#36486b",
  white = "#fff",
  oil = "#c5d5c5",
  gray = "#9fa9a3",
  fire = "#ff6f69",
  orange = "#ffcc5c",
  blue = "#0284C7",
  jeans = "#082F49",
}

const Drawer = createDrawerNavigator();

export function SideBar() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Menu" component={OpenSideBar} />
      <Drawer.Screen name="News" component={CloseSideBar} />
    </Drawer.Navigator>
  );
}

function SideBarContext() {
  const navigation: any = useNavigation();

  const list = [
    { name: "Menu", onPress: () => navigation.navigate("Menu") },
    { name: "News", onPress: () => navigation.navigate("News") },
    { name: "Toppings", onPress: () => navigation.navigate("Toppings") },
    { name: "Offers", onPress: () => navigation.navigate("Offers") },
  ];
  return (
    <View>
      {list.map((value, key) => (
        <View>
          <ListItem key={key}>
            <ListItem.Content>
              <ListItem.Title onPress={value.onPress}>
                {value.name}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </View>
      ))}
    </View>
  );
}

function CloseSideBar() {
  const navigation: any = useNavigation();
  return <View>{<SideBarContext />}</View>;
}

function OpenSideBar() {
  const navigation: any = useNavigation();
  return (
    <View>
      <Button title="Open Sidebar" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

export default function Navbar() {
  const navigation: any = useNavigation();
  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => <SideBar />}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: { height: 25, width: 25 },
  navBar: {
    flexDirection: "row",
    backgroundColor: colors.orange,
    top: 20,
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
