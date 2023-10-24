import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import Toppings from "./screens/Toppings";
import News from "./screens/News";
import Navbar from "./components/Navbar";
import NavigationBar from "react-native-navbar";
import Routing from "./Routing";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Menu from "./screens/Menu";
import Offers from "./screens/Offers";

export default function App() {
  return (
    <NavigationContainer>
      <Navbar />
      <Routing />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
