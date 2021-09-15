import { CssBaseline } from "@material-ui/core";
import { ConnectedRouter } from "connected-react-router";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "styles/global.scss";
import { history } from "utils";
import App from "./App";
import { store } from "./app/store";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <CssBaseline />
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
