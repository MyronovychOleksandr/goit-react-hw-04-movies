import { Component, lazy, Suspense } from "react";
import { Link, Switch, Route } from "react-router-dom";
import routes from "../../routes";
import moviesApi from "../../services/moviesApi";
import Loader from "react-loader-spinner";
import s from "./MovieDetailsPage.module.css";

class MovieDetailsPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const id = this.props.match.params.movieId;
    moviesApi.fetchMoviesId(id).then((movies) => this.setState({ movies }));
  }

  handleGoBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push(routes.home);
  };

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <div className={s.container}>
          <img
            className={s.img}
            src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`}
            alt=""
          />
          <div>
            <h3>{movies.title}</h3>
            <p>User Score: {movies.vote_average * 10}%</p>
            <h4>Overview</h4>
            <p>{movies.overview}</p>
            <h5>Genres</h5>
            <ul className={s.list}>
              {movies.genres &&
                movies.genres.map((genre) => (
                  <li className={s.item} key={genre.id}>
                    {genre.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <hr />
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link
                to={{
                  pathname: `${match.url}/cast`,
                  state: { from: this.props.location },
                }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${match.url}/reviews`,
                  state: { from: this.props.location },
                }}
              >
                Review
              </Link>
            </li>
          </ul>
        </div>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route
              path={routes.cast}
              component={lazy(() =>
                import("../cast/Cast" /* webpackChunkName: "cast-page" */)
              )}
            />
            <Route
              path={`${match.url}/reviews`}
              component={lazy(() =>
                import(
                  "../reviews/Reviews" /* webpackChunkName: "reviews-page" */
                )
              )}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
