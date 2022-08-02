import axios from "axios";

axios.defaults.baseURL = "http://192.168.88.110:5000/"; // IPv4
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");
