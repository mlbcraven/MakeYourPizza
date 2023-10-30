import AsyncStorage from "@react-native-async-storage/async-storage";

const url = "https://dominosbackend-production.up.railway.app";

interface loginResponce {
  token: string;
  user: string;
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
