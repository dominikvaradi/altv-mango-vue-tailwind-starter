import "./index.css";

import { createApp } from "vue";
import App from "@/App.vue";
import MangoPlugin from "@/plugins/mango";

const app = createApp(App);

app.use(MangoPlugin);

app.mount("#app");
