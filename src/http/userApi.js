import { $host } from "./index";

export const login = async (password, username) => {
  const { data } = await $host.post("api/auth/token/login/", {
    username,
    password,
  });
  localStorage.setItem("token", JSON.stringify(data.token));
  return data.token;
};
