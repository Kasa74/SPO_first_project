import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration_1 = async (email, password) => {
  const { data } = await $host.post("api/user/registartion", {
    email,
    password,
    role: "ADMIN",
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const login_1 = async (email, password) => {
  const { data } = await $host.post("api/user/login", { email, password });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const check = async () => {
  const { data } = await $host.post("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
