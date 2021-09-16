import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "content-type": "application/octet-stream",
  },
});

export default {
  getData: (p: string) =>
    instance({
      method: "GET",
      url: p,
      params: {},
      transformResponse: [
        function (data) {
          // Do whatever you want to transform the data
          console.log("Transforming data...");
          const json = JSON.parse(data);
          return json;
        },
      ],
    }),
  postData: () =>
    instance({
      method: "POST",
      url: "/api",
      data: {
        item1: "data1",
        item2: "item2",
      },
      headers: {
        "content-type": "application/json", // override instance defaults
      },
    }),
};
