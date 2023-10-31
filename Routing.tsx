import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import News from "./screens/News";
import Toppings from "./screens/Toppings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutUs from "./screens/AboutUs";
import Help from "./screens/Help";
import Information from "./screens/Information";
import Offers from "./screens/Offers";
import Menu from "./screens/Menu";
import Navbar from "./components/Navbar";
import ShoppingCart from "./screens/ShoppingCart";
import Login from "./screens/Login";
import React from "react";
import SignUp from "./screens/SignUp";
import SideBar from "./components/SideBar";

export default function Routing() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="SideBar"
          component={SideBar}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "First Page" }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login Page" }}
        />

        <Stack.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{ title: "Your Shopping Cart" }}
        />
        <Stack.Screen
          name="Toppings"
          component={Toppings}
          options={{ title: "Toppings" }}
        />
        <Stack.Screen
          name="Information"
          component={Information}
          options={{ title: "Informations" }}
        />
        <Stack.Screen
          name="Offers"
          component={Offers}
          options={{ title: "Offers" }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{ title: "About Us" }}
        />
        <Stack.Screen
          name="News"
          component={News}
          options={{ title: "News" }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ title: "Menu" }}
        />
      </Stack.Group>
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "Sign Up" }}
      />
    </Stack.Navigator>
  );
}
