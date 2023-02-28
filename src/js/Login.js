import axios from "axios";

export async function Login(email, password) {
  console.log("logging in");
  try {
    const { data } = await axios.get(
      "https://snoc-server.onrender.com/api/login"
    );
    //access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZm9vIiwiaWF0IjoxNjc3NTA5ODE1fQ.sa_5bwYPDYiXqHfQhT9UUKSLqIC0KZDV6GZZMmCqGps; Path=/; HttpOnly; Secure; SameSite=Strict
    document.cookie =
      "access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZm9vIiwiaWF0IjoxNjc3NTA5ODE1fQ.sa_5bwYPDYiXqHfQhT9UUKSLqIC0KZDV6GZZMmCqGps; Path=/; SameSite=Strict; Secure";
    return data;
  } catch (error) {
    let message = "Something went wrong, Please try again";
    if (error.response) {
      message = error.response.data.msg;
    }
  }
}

export function Logout() {
  console.log("logging out");
  window.location.href = "/login";
}
