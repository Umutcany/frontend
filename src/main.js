import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { router } from "./routes/routes";

import {
  faBasketShopping,
  faCircleExclamation,
  faLocationDot,
  faPenToSquare,
  faPhone,
  faTrashCan,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { EventBus } from "./EventBus.js";

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$eventBus = EventBus; // Add EventBus to the global properties

library.add([
  faBasketShopping,
  faLocationDot,
  faPhone,
  faUserTie,
  faCircleExclamation,
  faPenToSquare,
  faTrashCan,
]);

app.use(pinia);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());

app.mount("#app");
