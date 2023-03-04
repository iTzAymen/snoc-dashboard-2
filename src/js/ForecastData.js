import { getChartData, getPosChartData } from "./Data";
import axios from "axios";

export async function getForecastData() {
  console.log(`getting forecast data`);
  const dec = await getChartData({ day: "Days", month: "Dec", year: 2022 });
  const jan = await getChartData({ day: "Days", month: "Jan", year: 2023 });
  const feb = await getChartData({ day: "Days", month: "Feb", year: 2023 });
  const dec_data = convertData(dec, 12, 2022);
  const jan_data = convertData(jan, 1, 2023);
  const feb_data = convertData(feb, 2, 2023);

  let transactions = [...dec_data, ...jan_data, ...feb_data];
  const config = {
    transactions: transactions,
    start_date: "2022-12-12",
    end_date: "2023-02-11",
    predictions: 17,
  };
  const { data } = await axios.post(
    `https://itzaymen.pythonanywhere.com`,
    config
  );
  console.log(`received forecast data`);

  const result = [...Array(28)].map((_, item) => {
    const index = data.index.findIndex(
      (value) => parseInt(value.substring(8, 10)) == item + 1
    );
    if (index >= 0) {
      return { _id: item, count: data.data[index] };
    }
    return { _id: item, count: 0 };
  });
  localStorage.setItem("preds", JSON.stringify(result));
  return result;
}

function convertData({ data }, month, year) {
  const result = data.reverse().map((item) => {
    return [`${year}-${month}-${item.month}`, item.count];
  });
  return result;
}

function convertPosData({ data }, month, year) {
  const result = data.reverse().map((item) => {
    return [`${year}-${month}-${item.day}`, item.count];
  });
  return result;
}

export async function getPosForecastData(id) {
  console.log(`getting forecast data`);
  const dec = await getPosChartData(id, {
    day: "Days",
    month: "Dec",
    year: 2022,
  });
  const jan = await getPosChartData(id, {
    day: "Days",
    month: "Jan",
    year: 2023,
  });
  const feb = await getPosChartData(id, {
    day: "Days",
    month: "Feb",
    year: 2023,
  });
  const dec_data = convertPosData(dec, 12, 2022);
  const jan_data = convertPosData(jan, 1, 2023);
  const feb_data = convertPosData(feb, 2, 2023);

  let transactions = [...dec_data, ...jan_data, ...feb_data];
  const config = {
    transactions: transactions,
    start_date: "2022-12-12",
    end_date: "2023-02-11",
    predictions: 17,
  };
  const { data } = await axios.post(
    `https://itzaymen.pythonanywhere.com`,
    config
  );
  console.log(`received forecast data`);

  const result = [...Array(28)].map((_, item) => {
    const index = data.index.findIndex(
      (value) => parseInt(value.substring(8, 10)) == item + 1
    );
    if (index >= 0) {
      return { _id: item, count: data.data[index] };
    }
    return { _id: item, count: 0 };
  });
  return result;
}
