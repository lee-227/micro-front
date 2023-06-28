import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import routes from "./router";
import { createRouter, createWebHistory } from "vue-router";
import {
  renderWithQiankun,
  qiankunWindow,
  type QiankunProps,
} from "vite-plugin-qiankun/dist/helper";

let router = null;
let app = null;
let history = null;

function render(props: QiankunProps) {
  const { container } = props;
  history = createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? "/vue" : "/"
  );
  router = createRouter({
    history,
    routes,
  });
  app = createApp(App);
  app.use(createPinia());
  app.use(router);
  app.mount(
    container ? (container.querySelector("#app") as HTMLElement) : "#app"
  );
}
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}

renderWithQiankun({
  mount(props) {
    console.log("vite-react 上线了");
    render(props);
  },
  bootstrap() {
    console.log("vue bootstrap");
  },
  unmount(props) {
    console.log("vite-react 下线了");
    app.unmount();
    app = null;
    router = null;
    history.destroy();
  },
  update(props) {
    console.log("vite-react更新了", props);
  },
});
