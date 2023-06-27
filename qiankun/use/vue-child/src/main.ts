import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import routes from "./router";
import { createRouter, createWebHistory } from "vue-router";

let router = null;
let app = null;
let history = null;

function render(props) {
  const { container } = props;
  history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? "/vue" : "/");
  router = createRouter({
    history,
    routes,
  });
  app = createApp(App);
  app.use(createPinia());
  app.use(router);
  app.mount(container ? container.querySelector("#app") : "#app");
}
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
export async function bootstrap() {
  console.log("vue bootstraped");
}
export async function mount(props) {
  render(props);
}
export async function unmount() {
  app.unmount();
  app = null;
  router = null;
  history.destroy();
}
