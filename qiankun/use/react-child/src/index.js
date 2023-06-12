import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
let root;
function render(props) {
  const container = props.container;
  root = ReactDOM.createRoot(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
// 如果不是在qiankun中引入
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
export async function bootstrap() {
  console.log("react bootstraped");
}
export async function mount(props) {
  render(props);
}
export async function unmount(props) {
  root.unmount();
}
