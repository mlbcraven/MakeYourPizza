import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import Toppings from "./screens/Toppings";
import News from "./screens/News";
import Navbar, { SideBar } from "./components/Navbar";
import NavigationBar from "react-native-navbar";
import Routing from "./Routing";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Menu from "./screens/Menu";
import Offers from "./screens/Offers";
import Login from "./screens/Login";
import Button from "./components/Button";
import React, { useState } from "react";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {userLoggedIn ? (
        <Drawer.Navigator>
          <Drawer.Screen
            name="Routing"
            component={Routing}
            options={{ headerShown: false }}
          />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
