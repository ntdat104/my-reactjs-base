import { CssBaseline } from "@material-ui/core";
import { ConnectedRouter } from "connected-react-router";
import "i18n/i18n";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { history } from "utils";
import App from "./App";
import { store } from "./app/store";

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <CssBaseline />
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
