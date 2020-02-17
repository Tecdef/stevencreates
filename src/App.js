import React from "react";
import "./Reset.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/stats' component={Stats} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
