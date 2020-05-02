import React from "react";
import ReactDOM from "react-dom";
import Index from "./components/container/";
import * as serviceWorker from "./serviceWorker";
import "./assets/sass/main.scss";
import "./tailwind.generated.css";

const rootEl = document.getElementById("root");

ReactDOM.render(<Index />, rootEl);
console.log({ module: module.hot });

if (module.hot) {
  module.hot.accept("./components/container/", () => {
    const NextApp = require("./components/container/").default;
    ReactDOM.render(<NextApp />, rootEl);
  });
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
