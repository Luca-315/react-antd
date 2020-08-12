import { Route, Switch } from "react-router-dom";
import { App } from "./App";
import React from "react";

export const Routes = (
  <Switch>
    <Route path="/" component={App} />
  </Switch>
);
