import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
const queryClientBox = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <QueryClientProvider client={queryClientBox}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </Router>
);

reportWebVitals();
