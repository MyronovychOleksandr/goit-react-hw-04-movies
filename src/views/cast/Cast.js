import React, { Component } from "react";
import moviesApi from "../../services/moviesApi";

class Cast extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const id = this.props.match.params.movieId;
    moviesApi.fetchMoviesCast(id).then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <hr />
        <h2>Cast</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.profile_path}`}
                alt=""
              />
              <p>{movie.name}</p>
              <p>Character: {movie.character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
