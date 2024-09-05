import { API_KEY, BASE_URL } from "../constants";

const toDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();
  console.log(currentDate);
  const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
    months[currentDate.getMonth()]
  }`;
  console.log(date);
  return date;
};

export const convertToFahrenheit = (temperature: number) => {
  return Math.round((temperature * 9) / 5 + 32);
};

//   const renderTemperature = (temperature: number) => {
//     if (isCelsius) {
//       return Math.round(temperature);
//     } else {
//       return convertToFahrenheit(temperature);
//     }
//   };

export const getCurrentDate = () => {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  } as const;
  const currentDate = new Date().toLocaleDateString("en-US", options);
  return currentDate;
};

export const convertToCelsius = (temperature: number) => {
  return Math.round((temperature - 32) * (5 / 9));
};

export const buildUrl = (city: string) => {
  BASE_URL.searchParams.append("query", city);
  BASE_URL.searchParams.append("key", API_KEY);

  return BASE_URL.href;
};
