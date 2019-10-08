import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import echarts from "echarts";
import "./assets/scss/reset.css";
import Axios from "axios";
import store from "./store";

Vue.prototype.$axios = Axios;
Vue.prototype.$echarts = echarts;
// router setup
import routes from "./routes/routes";
require("./assets/Mock/mock");
//import iconfont
import "./assets/iconfont/iconfont.css";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";

// configure router
const router = new VueRouter({
  mode:"history",
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active"
});

Vue.prototype.$Chartist = Chartist;

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store,
  data: {
    Chartist: Chartist
  }
});
