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
import SignUp from "./screens/SignUp";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
        <Stack.Screen
          name="App"
          component={Routing}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
