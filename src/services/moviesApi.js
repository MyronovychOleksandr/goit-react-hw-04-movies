import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "c5b6d1c476fec4a581a7ffaf65618b81";

const fetchMoviesTrending = () => {
  return axios
    .get(`${baseUrl}/trending/all/day?api_key=${apiKey}`)
    .then((response) => response.data.results);
};

const fetchMoviesKeyword = (keyword) => {
  return axios
    .get(`${baseUrl}/search/movie/?api_key=${apiKey}&page=1&query=${keyword}`)
    .then((response) => response.data.results);
};

const fetchMoviesId = (id) => {
  return axios
    .get(`${baseUrl}/movie/${id}?api_key=${apiKey}`)
    .then((response) => response.data);
};

const fetchMoviesCast = (id) => {
  return axios
    .get(`${baseUrl}/movie/${id}/credits?api_key=${apiKey}`)
    .then((response) => response.data.cast);
};

const fetchMoviesReview = (id) => {
  return axios
    .get(`${baseUrl}/movie/${id}/reviews?api_key=${apiKey}`)
    .then((response) => response.data.results);
};

export default {
  fetchMoviesTrending,
  fetchMoviesKeyword,
  fetchMoviesId,
  fetchMoviesCast,
  fetchMoviesReview,
};
