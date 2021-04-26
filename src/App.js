import "./App.css";

import { Route, Switch } from "react-router";

import HomePage from "./pages/homepage/homepage.component";
import React from "react";
import ShopPage from "./pages/homepage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

//npm i node-sass
