import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import reducers from "./reducers";

import { createBrowserHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

let history = createBrowserHistory();

const store = createStore(reducers, applyMiddleware(reduxThunk));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
