import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import routes from "../routes";
import moviesApi from "../../services/moviesApi";
// import getQueryString from "../utils/getQueryString";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const id = this.props.match.params.movieId;
    moviesApi
      .fetchMoviesReview(id)
      .then((reviews) => this.setState({ reviews }));
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        <hr />
        {reviews.length === 0 && (
          <p>We don't have any reviews for this movie</p>
        )}
        {reviews.length > 0 && (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Reviews;
