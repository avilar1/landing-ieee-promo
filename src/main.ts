import "./assets/css/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import vObserve from "./directives/vObserve";

const app = createApp(App);

// Registra a diretiva globalmente
app.directive("observe", vObserve);

app.mount("#app");
