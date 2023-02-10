import axios from "axios";

export default async function Login(email, password) {
  try {
    const { data } = await axios.post(
      "https://snoc-dashboard-api.onrender.com/api/v1/auth/login",
      { email, password }
    );

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  } catch (error) {
    let message = "Something went wrong, Please try again";
    if (error.response) {
      message = error.response.data.msg;
    }

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
}
