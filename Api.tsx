import AsyncStorage from "@react-native-async-storage/async-storage";

const url = "https://dominosbackend-production.up.railway.app";

interface loginResponce {
  token: string;
  user: string;
}

export interface toppingProps {
  name: string;
  price: number;
}

export interface pizza {
  name: string;
  size: "Small" | "Medium" | "Large";
  toppings: toppingProps[];
}

export async function userLogin(
  email: string,
  password: string
): Promise<loginResponce> {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };
  const result = await fetch(`${url}/users/login`, options);
  return result.json();
}

export async function userSighUp(
  name: string,
  password: string,
  email: string
) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password, email }),
  };
  const result = await fetch(`${url}/users/signup`, options);
  return result.json();
}

export async function getOrders(): Promise<pizza[]> {
  const token = await AsyncStorage.getItem("token");
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  };
  const result = await fetch(`${url}/orders`, options);
  return result.json();
}

export async function purchase(pizzas: pizza[]): Promise<pizza[]> {
  const token = await AsyncStorage.getItem("token");
  const options = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ pizzas }),
  };
  const result = await fetch(`${url}/orders`, options);
  return result.json();
}
