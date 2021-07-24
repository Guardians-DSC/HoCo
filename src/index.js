import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { PagesProvider } from "./contexts/app.context";
import { ResizeProvider } from "./contexts/resize.context";

ReactDOM.render(
  <React.StrictMode>
    <ResizeProvider>
      <PagesProvider>
        <App />
      </PagesProvider>
    </ResizeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
