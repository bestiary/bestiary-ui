import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@bestiary-ui/style";

import BestiaryUI from "@bestiary-ui/components";

const app = createApp(App);

app.use(router);
app.use(BestiaryUI);

app.mount("#app");