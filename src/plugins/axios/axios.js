import axios from "axios";

axios.defaults.baseURL = "http://192.168.81.22:5000/"; // IPv4 
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");
