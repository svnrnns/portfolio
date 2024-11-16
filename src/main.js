import { createApp } from "vue";
import "./css/main.css";
import App from "./App.vue";

const app = createApp(App);

// Vue Router
import router from "./router/routes";
app.use(router);

app.mount("#app");
