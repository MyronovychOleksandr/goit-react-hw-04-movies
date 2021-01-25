import React, { Component } from "react";
import Searchform from "../../components/searchForm/SearchForm";
import { Link } from "react-router-dom";
import routes from "../../routes";
import moviesApi from "../../services/moviesApi";
import getQueryString from "../../utils/getQueryString";

class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { query: query } = getQueryString(this.props.location.search);
    if (query) {
      this.fetchMovie(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryString(prevProps.location.search);
    const { query: nextQuery } = getQueryString(this.props.location.search);
    if (prevQuery !== nextQuery) {
      return this.fetchMovie(nextQuery);
    }
    this.fetchMovie(nextQuery);
  }

  handleChangeQuery = (quary) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${quary}`,
    });
  };

  fetchMovie = (keyword) => {
    moviesApi
      .fetchMoviesKeyword(keyword)
      .then((movies) => this.setState({ movies }));
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <Searchform onChange={this.handleChangeQuery} />
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

export default Movies;
