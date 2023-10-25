import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CustonButton from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { userLogin } from "../Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigation: any = useNavigation();

  async function Login() {
    const logUser = await userLogin(user, password);
    if (logUser.token) {
      navigation("Routing");
      AsyncStorage.setItem("token", logUser.token);
      AsyncStorage.setItem("user", JSON.stringify(logUser.user));
    } else {
      alert("Login Failed");
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/133807580.png")} />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="User."
          placeholderTextColor="#003f5c"
          onChangeText={(user) => setUser(user)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.button} onPress={() => Login()}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    color: "white",
    elevation: 3,
    backgroundColor: "black",
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
});
