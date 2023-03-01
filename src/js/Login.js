import axios from "axios";

export function getToken() {
  try {
    return document.cookie
      .split("; ")
      .find((item) => item.startsWith("access_token"))
      .split("=")[1];
  } catch (error) {
    return null;
  }
}

export async function Login(username, password) {
  console.log("logging in");
  try {
    const { data } = await axios.post(
      "https://snoc-server.onrender.com/api/login",
      {
        username,
        password,
      }
    );
    console.log(data);
    //access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZm9vIiwiaWF0IjoxNjc3NTA5ODE1fQ.sa_5bwYPDYiXqHfQhT9UUKSLqIC0KZDV6GZZMmCqGps; Path=/; HttpOnly; Secure; SameSite=Strict
    document.cookie = data.cookie;
    return data;
  } catch (error) {
    let message = "Something went wrong, Please try again";
    if (error.response) {
      message = error.response.data.msg;
    }
    return null;
  }
}

export function Logout() {
  console.log("logging out");
  window.location.href = "/login";
}

export function checkAuthority() {
  const token = getToken();
  if (!token || token === "undefined") {
    return false;
  }
  return true;
}
