import api from "../api";

export async function login({ email, password }) {
  const { data } = await api.post("/user/login", { email, password });
  sessionStorage.setItem("authToken", data.token);
  sessionStorage.setItem("id", data.user.id);
  return data.user;
}

export async function register({ email, password }) {
  const { data } = await api.post("/user/register", { email, password });
  sessionStorage.setItem("authToken", data.token);
  sessionStorage.setItem("id", data.user.id);
  return data.user;
}

export function logout() {
  sessionStorage.removeItem("authToken");
  sessionStorage.removeItem("id");
}
