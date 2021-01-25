import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
// import HomePage from "../views/homePage/HomePage";
// import MoviesPage from "../views/moviesPage/MoviesPage";
// import MovieDetailsPage from "../views/movieDetailsPage/MovieDetailsPage";
// import NotFound from "../views/notFound/NotFound";
import Layout from "./layout/Layout";
import Loader from "react-loader-spinner";
import routes from "../routes";

const App = () => (
  <Layout>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route
          path={routes.home}
          exact
          component={lazy(() =>
            import(
              "../views/homePage/HomePage" /* webpackChunkName: "home-page" */
            )
          )}
        />
        <Route
          path={routes.movies}
          exact
          component={lazy(() =>
            import(
              "../views/moviesPage/MoviesPage" /* webpackChunkName: "movies-page" */
            )
          )}
        />
        <Route
          path={routes.movieDetails}
          component={lazy(() =>
            import(
              "../views/movieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movieDetailsPage-page" */
            )
          )}
        />

        <Route
          component={lazy(() =>
            import(
              "../views/notFound/NotFound" /* webpackChunkName: "notFound-page" */
            )
          )}
        />
      </Switch>
    </Suspense>
  </Layout>
);

export default App;
