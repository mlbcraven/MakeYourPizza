import AsyncStorage from "@react-native-async-storage/async-storage";

const url = "https://dominosbackend-production.up.railway.app";

interface loginResponce {
  token: string;
  user: string;
}

export interface pizzaOrders {
  id: string;
  userId: string;
  pizzas: [];
  price: number;
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

export async function getOrders(): Promise<pizzaOrders[]> {
  const token = AsyncStorage.getItem("token");
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const result = await fetch(`${url}/orders`, options);
  return result.json();
}

export async function giveOrders(orderID: number): Promise<pizzaOrders[]> {
  const token = AsyncStorage.getItem("token");
  const options = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ orderID }),
  };
  const result = await fetch(`${url}/orders`, options);
  return result.json();
}
