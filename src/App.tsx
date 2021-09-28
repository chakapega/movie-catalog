import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import i18next from "i18next";

import { useAppSelector } from "hooks/common";
import { Header } from "features/Header/Header.component";
import { Dashboard } from "features/Dashboard/Dashboard.component";
import { Movies } from "features/Movies/Movies.component";
import { RandomMovie } from "features/RandomMovie/RandomMovie.component";
import { MovieDetails } from "features/MovieDetails/MovieDetails.component";
import { AuthPage } from "features/Auth/AuthPage";
import { ProtectedRoute } from "features/Auth/ProtectedRoute";
import { MovieLists } from "features/MovieLists/MovieLists.component";

const App = () => {
  const activeLanguage = useAppSelector((state) => state.language.activeLanguage);

  useEffect(() => {
    i18next.changeLanguage(activeLanguage);
  }, [activeLanguage]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/random-movie">
          <RandomMovie />
        </Route>
        <Route path="/movie-details/:id">
          <MovieDetails />
        </Route>
        <Route path="/auth-page">
          <AuthPage />
        </Route>
        <ProtectedRoute path="/movie-lists" component={MovieLists} />
      </Switch>
    </>
  );
};

export default App;
