import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import { Header } from "./components/Header";

import "./styles/reset.css";
import "./styles/root.css";
import "./styles/app.css";
import usePagesContext from "./contexts/app.context";
import useResize from "./contexts/resize.context";

export const App = () => {
  const { pages } = usePagesContext();
  const { isMobile } = useResize();

  return (
    <div className={"app"}>
      <BrowserRouter>
        {isMobile ? <Header /> : <Sidebar />}

        <div className={`${isMobile ? "mobile-body" : "body"}`}>
          <Switch>
            {pages.map((page, index) => (
              <Route key={index} path={page.path} component={page.component} />
            ))}
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};
