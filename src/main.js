import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/font-awesome/css/font-awesome.min.css";
import "./assets/css/adminlte.min.css";
import "./plugins/iCheck/flat/blue.css";
import "./plugins/morris/morris.css";
import "./plugins/jvectormap/jquery-jvectormap-1.2.2.css";
import "./plugins/datepicker/datepicker3.css";
import "./plugins/daterangepicker/daterangepicker-bs3.css";
import "./plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css";
import "./assets/css/bootstrap-rtl.min.css";
import "./assets/css/custom-style.css";
import "./plugins/axios/axios";

const app = createApp(App);

app.use(router);

app.mount("#app");
