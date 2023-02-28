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

export function MonthsData(data) {
  const result = [...Array(12)].map((_, item) => {
    const actual = data.find((value) => value.year == item + 1);
    if (actual) {
      return { _id: months[item], count: actual.count };
    }
    return { _id: months[item], count: 0 };
  });
  return result;
}

export function DaysData(data) {
  const result = [...Array(31)].map((_, item) => {
    const actual = data.find((value) => value.month == item + 1);
    if (actual) {
      return { _id: item, count: actual.count };
    }
    return { _id: item, count: 0 };
  });
  return result;
}

export function HoursData(data) {
  const result = [...Array(24)].map((_, item) => {
    const actual = data.find((value) => value.hour == item + 1);
    const hour = item < 12 ? `${item} am` : `${item} pm`;
    if (actual) {
      return { _id: hour, count: actual.count };
    }
    return { _id: hour, count: 0 };
  });
  return result;
}

export function OfferData(data) {
  const result = data.map((item) => {
    return { _id: item.produit, count: item.produit_count };
  });

  return result;
}

export function CityData(data) {
  const result = data.map((item) => {
    return { _id: item.wilaya, count: item.wilaya_count };
  });
  return result;
}

export function PosMonthsData(data) {
  const result = [...Array(12)].map((_, item) => {
    const actual = data.find((value) => value.month == item + 1);
    if (actual) {
      return { _id: months[item], count: actual.count };
    }
    return { _id: months[item], count: 0 };
  });
  return result;
}

export function PosDaysData(data) {
  const result = [...Array(31)].map((_, item) => {
    const actual = data.find((value) => value.day == item + 1);
    if (actual) {
      return { _id: item, count: actual.count };
    }
    return { _id: item, count: 0 };
  });
  return result;
}

export function PosHoursData(data) {
  const result = [...Array(24)].map((_, item) => {
    const actual = data.find((value) => value.hour == item + 1);
    const hour = item < 12 ? `${item} am` : `${item} pm`;
    if (actual) {
      return { _id: hour, count: actual.count };
    }
    return { _id: hour, count: 0 };
  });
  return result;
}
