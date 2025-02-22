import axios from "axios";

const api = axios.create({
  baseURL: "https://covid-19-data.p.rapidapi.com",
  params: { format: "json" },
  headers: {
    "x-rapidapi-key": "93a69c40a0mshff4c0e259dfe5b6p1087ffjsncd20470923d7",
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
  },
});

export default api;
