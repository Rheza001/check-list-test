import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import axios from "axios";

import "./assets/main.css";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

Vue.prototype.$http = axios;