import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/style.scss";

import { router } from "./router/index";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

createApp(App).use(router).mount("#app");
