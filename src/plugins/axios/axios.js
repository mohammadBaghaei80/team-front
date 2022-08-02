import axios from "axios";

axios.defaults.baseURL = "http://192.168.3.22:5000/"; // IPv4 
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");
