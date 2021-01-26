import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Loader from "react-loader-spinner";
import routes from "../routes";

const HomePage = lazy(() =>
  import("../views/homePage/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("../views/moviesPage/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "../views/movieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movieDetailsPage-page" */
  )
);
const NotFound = lazy(() =>
  import("../views/notFound/NotFound" /* webpackChunkName: "notFound-page" */)
);

const App = () => (
  <Layout>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.movies} exact component={MoviesPage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Layout>
);

export default App;
