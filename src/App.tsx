import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Header } from "features/Header/Header.component";
import { Dashboard } from "features/Dashboard/Dashboard.component";
import { Movies } from "features/Movies/Movies.component";
import { RandomMovie } from "features/RandomMovie/RandomMovie.component";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/'>
        <Dashboard />
      </Route>
      <Route path='/movies'>
        <Movies />
      </Route>
      <Route path='/random-movie'>
        <RandomMovie />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
