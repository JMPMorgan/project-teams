import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faUsers,
  faMessage,
  faGear,
  faHome,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import "@/assets/bootstrap/bootstrap.min.css";
import "@/assets/bootstrap/bootstrap.bundle.min.js";

library.add(faUser, faUsers, faMessage, faGear, faHome, faRightFromBracket);
createApp(App)
  .component("font-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
