import axios from "axios";

let fetching = false;
export default function getData() {
  if (fetching == true) {
    return;
  }

  console.log("getting data");
  fetching = true;
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  axios
    .get(
      "https://snoc-dashboard-api.onrender.com/api/v1/transactions/overview",
      config
    )
    .then((res) => {
      if (res.data.success) {
        const data = res.data.data;
        localStorage.setItem("data", JSON.stringify(data));
        console.log("data received");
        fetching = false;
      }
    })
    .catch((err) => {
      console.log("error occured");
      fetching = false;
    });
}

export async function getDataAsync() {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    "https://snoc-dashboard-api.onrender.com/api/v1/transactions/overview",
    config
  );
  return data;
}
