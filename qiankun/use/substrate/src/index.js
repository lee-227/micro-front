import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { registerMicroApps, start } from "qiankun";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const loader = (loading) => {
  console.log(loading);
};
registerMicroApps(
  [
    {
      name: "reactApp",
      entry: "//localhost:4000",
      container: "#container",
      activeRule: "/react",
      loader,
    },
    // {
    //   name: "vueApp",
    //   entry: "//localhost:5000",
    //   container: "#container",

    //   activeRule: "/vue",
    //   loader,
    // },
  ],
  {
    beforeLoad: () => {
      console.log("beforeLoad");
    },
    beforeMount: () => {
      console.log("beforeMount");
    },
    afterMount: () => {
      console.log("adterMount");
    },
    beforeUnmount: () => {
      console.log("beforeUnmount");
    },
    afterUnmount: () => {
      console.log("afterUnmount");
    },
  }
);
start();
