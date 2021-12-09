import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./index.css";
import { ThemeProvider } from "./theme.context";
import { SearchProvider } from "./search.context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
