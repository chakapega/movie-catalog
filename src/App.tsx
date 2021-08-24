import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import i18next from "i18next";
import { useAuth0 } from "@auth0/auth0-react";
import { Spinner } from "react-bootstrap";

import { useAppSelector } from "hooks";
import { Header } from "features/Header/Header.component";
import { Dashboard } from "features/Dashboard/Dashboard.component";
import { Movies } from "features/Movies/Movies.component";
import { RandomMovie } from "features/RandomMovie/RandomMovie.component";
import { MovieDetails } from "features/MovieDetails/MovieDetails.component";

const App = () => {
  const { isLoading: isAuthLoading } = useAuth0();
  const activeLanguage = useAppSelector((state) => state.language.activeLanguage);

  useEffect(() => {
    i18next.changeLanguage(activeLanguage);
  }, [activeLanguage]);

  if (isAuthLoading) {
    return (
      <div className='spinner-container'>
        <Spinner animation='border' />
      </div>
    );
  }

  return (
    <>
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
        <Route path='/movie-details/:id'>
          <MovieDetails />
        </Route>
      </Switch>
    </>
  );
};

export default App;
