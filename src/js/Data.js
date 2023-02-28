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

export async function getPosData(id) {
  console.log(`getting pos ${id} data`);
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

export async function getCardsData() {
  console.log("getting cards data");
  const { data } = await axios.get("https://snoc-server.onrender.com/api/info");
  console.log("received cards data");
  return data;
}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export async function getChartData({ day, month, year }) {
  const queryParam = `${day != "Days" ? `day=${day}&` : ""}${
    month != "Months" ? `month=${months.indexOf(month) + 1}&` : ""
  }${`year=${year}`}`;
  console.log(`getting charts ${queryParam} data`);
  const { data } = await axios.get(
    `https://snoc-server.onrender.com/api/transaction?${queryParam}`
  );
  console.log(`received charts ${queryParam} data`);
  return data;
}

export async function getPosChartData(id, date) {
  console.log(`getting pos ${id} chart data`);
  const { day, month, year } = date;
  const queryParam = `${day != "Days" ? `day=${day}&` : ""}${
    month != "Months" ? `month=${months.indexOf(month) + 1}&` : ""
  }${`year=${year}`}`;
  console.log(`getting charts ${queryParam} data`);
  const { data } = await axios.get(
    `https://snoc-server.onrender.com/api/pos/${id}?${queryParam}`
  );

  console.log(`received pos ${id} chart data`);
  return data;
}

export async function getPosRange(start, end) {
  console.log(`getting pos range ${start}-${end} chart data`);
  const { data } = await axios.get(
    `https://snoc-server.onrender.com/api/pos?range=${start}-${end}`
  );
  const result = data.map((item) => {
    return {
      name: item.nom_pdv,
      id: item.code_pdv,
      wilaya: item.wilaya_pdv,
      count: item.count,
    };
  });
  console.log(`received pos range ${start}-${end} chart data`);
  return result;
}

export async function getTransactionRange(start, end) {
  console.log(`getting transactions range ${start}-${end} chart data`);
  const { data } = await axios.get(
    `https://snoc-server.onrender.com/api/transaction?range=${start}-${end}`
  );
  const result = data.map((item) => {
    return {
      id: item.transaction_id,
      posid: item.code_pdv,
      type: item.type_transaction,
      date: item.date_derniere_modification,
      status: item.description,
    };
  });
  console.log(`received transactions range ${start}-${end} chart data`);
  return result;
}

export async function getTransactionById(id) {
  console.log(`getting transaction ${id} data`);
  const { data } = await axios.get(
    `https://snoc-server.onrender.com/api/transaction/${id}`
  );
  console.log(data);
  const keys = Object.keys(data[0]);
  const values = Object.values(data[0]);
  const result = keys.map((key, index) => {
    return [key, values[index]];
  });
  console.log(`received transaction ${id} data`);
  return result;
}

export async function getPosById(id) {
  console.log(`getting pos ${id} data`);
  const { data } = await axios.get(
    `https://snoc-server.onrender.com/api/pos/${id}`
  );
  const keys = Object.keys(data[0]);
  const values = Object.values(data[0]);
  const pos_info = keys.map((key, index) => {
    if (key == "snoc") {
      return;
    }
    return [key, values[index]];
  });

  const pos_transactions = data[0]["snoc"].map((item) => {
    return {
      id: item.transaction_id,
      posid: data[0].code_pdv,
      type: item.type_transaction,
      date: item.date_derniere_modification,
      status: item.description,
    };
  });
  console.log(`received pos ${id} data`);
  return { pos_info, pos_transactions };
}
