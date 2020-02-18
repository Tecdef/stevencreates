import React from "react";
import "./Reset.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Mywork from "./pages/Mywork";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/stats' component={Stats} exact />
        <Route path='/mywork' component={Mywork} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
