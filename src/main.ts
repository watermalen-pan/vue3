import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import registerComponents from "./components";

const app = createApp(App);
registerComponents(app);

app.use(store);
app.use(router);

app.mount("#app");
