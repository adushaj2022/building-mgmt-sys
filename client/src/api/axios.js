import axios from "axios";

const AXIOS = axios.create({
  baseURL: "http://localhost:3010/api/",
  withCredentials: true,
});

export default AXIOS;
