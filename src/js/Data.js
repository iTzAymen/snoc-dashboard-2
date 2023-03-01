import axios from "axios";
import { getToken } from "./Login";

export async function getCardsData() {
  console.log("getting cards data");
  const token = getToken();
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    "https://snoc-server.onrender.com/api/info",
    config
  );
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
  const token = getToken();
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `https://snoc-server.onrender.com/api/transaction?${queryParam}`,
    config
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
  const token = getToken();
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `https://snoc-server.onrender.com/api/pos/${id}?${queryParam}`,
    config
  );

  console.log(`received pos ${id} chart data`);
  return data;
}

export async function getPosRange(start, end) {
  console.log(`getting pos range ${start}-${end} chart data`);
  const token = getToken();
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `https://snoc-server.onrender.com/api/pos?range=${start}-${end}`,
    config
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
  const token = getToken();
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `https://snoc-server.onrender.com/api/transaction?range=${start}-${
      end - 1
    }`,
    config
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
  const token = getToken();
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `https://snoc-server.onrender.com/api/transaction/${id}`,
    config
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

export async function getPosById(id, start, end) {
  console.log(`getting pos ${id} data`);
  const token = getToken();
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `https://snoc-server.onrender.com/api/pos/${id}?range=${start}-${end - 1}`,
    config
  );
  console.log(data);
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

export async function searchTransactionbyId(type, id, start, end) {
  console.log(`getting transactions search ${id} ${start}-${end}`);
  const token = getToken();
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `https://snoc-server.onrender.com/api/transaction/search/${
      type ? "tra_id" : "pos_id"
    }/${id}?range=${start}-${end - 1}`,
    config
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
  console.log(`received transactions search ${id} ${start}-${end}`);
  return result;
}

export async function getTransactionsSearchSuggestions(type, id) {
  console.log(`getting transactions suggestions ${id}`);
  const token = getToken();
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `https://snoc-server.onrender.com/api/transaction/searching/${
      type ? "tra_id" : "pos_id"
    }/${id}`,
    config
  );
  const result = data.map((item) => {
    return {
      id: type ? item.transaction_id : item.code_pdv,
    };
  });
  console.log(`received transactions search ${id}`);
  return result;
}

export async function searchPosbyId(type, id, start, end) {
  console.log(`getting transactions search ${id} ${start}-${end}`);
  const token = getToken();
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `https://snoc-server.onrender.com/api/pos/search/${
      type ? "pos_id" : "pos_name"
    }/${id}?range=${start}-${end - 1}`,
    config
  );
  const result = data.map((item) => {
    return {
      name: item.nom_pdv,
      id: item.code_pdv,
      wilaya: item.wilaya_pdv,
      count: item.count,
    };
  });
  console.log(`received pos search ${id} ${start}-${end}`);
  return result;
}

export async function getPosSearchSuggestions(type, id) {
  console.log(`getting pos suggestions ${id}`);
  const token = getToken();
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `https://snoc-server.onrender.com/api/pos/searching/${
      type ? "pos_id" : "pos_name"
    }/${id}`,
    config
  );
  const result = data.map((item) => {
    return {
      id: type ? item.code_pdv : item.nom_pdv,
    };
  });
  console.log(`received pos search ${id}`);
  return result;
}
