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

const dummy = {
  data: [
    { month: 31, count: 1273 },
    { month: 30, count: 1086 },
    { month: 29, count: 1080 },
    { month: 28, count: 1059 },
    { month: 27, count: 581 },
    { month: 26, count: 1013 },
    { month: 25, count: 885 },
    { month: 24, count: 898 },
    { month: 23, count: 866 },
    { month: 22, count: 868 },
    { month: 21, count: 953 },
    { month: 20, count: 498 },
    { month: 19, count: 906 },
    { month: 18, count: 861 },
    { month: 17, count: 912 },
    { month: 16, count: 868 },
    { month: 15, count: 950 },
    { month: 14, count: 822 },
    { month: 13, count: 478 },
    { month: 12, count: 853 },
    { month: 11, count: 857 },
    { month: 10, count: 815 },
    { month: 9, count: 748 },
    { month: 8, count: 898 },
    { month: 7, count: 913 },
    { month: 6, count: 560 },
    { month: 5, count: 920 },
    { month: 4, count: 830 },
    { month: 3, count: 878 },
    { month: 2, count: 937 },
    { month: 1, count: 740 },
  ],
};

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

const dummy2 = {
  data: [
    { hour: 22, count: 4 },
    { hour: 21, count: 11 },
    { hour: 20, count: 22 },
    { hour: 19, count: 39 },
    { hour: 18, count: 54 },
    { hour: 17, count: 89 },
    { hour: 16, count: 78 },
    { hour: 15, count: 80 },
    { hour: 14, count: 57 },
    { hour: 13, count: 47 },
    { hour: 12, count: 52 },
    { hour: 11, count: 47 },
    { hour: 10, count: 71 },
    { hour: 9, count: 60 },
    { hour: 8, count: 19 },
    { hour: 7, count: 8 },
    { hour: 6, count: 2 },
  ],
};

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
