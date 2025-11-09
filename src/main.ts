import "./assets/css/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Se tiver a diretiva vObserve:
 import vObserve from './directives/vObserve'

const app = createApp(App);
 app.directive('observe', vObserve)
app.use(router);
app.mount("#app");
