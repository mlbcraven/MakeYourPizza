import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import { userSighUp } from "../Api";
import { useState } from "react";

export default function SignUp() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigation: any = useNavigation();

  async function userSignUpFunction() {
    await userSighUp(user, password);
    navigation("Login");
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/133807580.png")} />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Set Up Your Username"
          placeholderTextColor="#003f5c"
          onChangeText={(user) => setUser(user)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Set Up Your Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.button} onPress={() => userSignUpFunction()}>
          Sign Up
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
