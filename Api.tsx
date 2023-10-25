const url = "https://dominosbackend-production.up.railway.app/users";

interface loginResponce {
  token: string;
  user: string;
}

export async function userLogin(
  name: string,
  password: string
): Promise<loginResponce> {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password }),
  };
  const result = await fetch(`${url}/login`, options);
  return result.json();
}
