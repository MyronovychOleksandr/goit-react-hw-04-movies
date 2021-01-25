import React, { Component } from "react";
import { Link } from "react-router-dom";
import movies from "../../services/moviesApi";
import routes from "../../routes";

class Home extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = () => {
    movies.fetchMoviesTrending().then((movies) => this.setState({ movies }));
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <h2>Trending today</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link
                id={movie.id}
                to={{
                  pathname: `${routes.movies}/${movie.id}`,
                  state: { from: this.props.location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Home;
