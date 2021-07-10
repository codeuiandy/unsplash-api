import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/index";
import { ResponsivenessProvider } from "./context/responsiveness";

function App(props) {
  return (
    <React.Fragment>
      <ResponsivenessProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </ResponsivenessProvider>
    </React.Fragment>
  );
}

export default App;
