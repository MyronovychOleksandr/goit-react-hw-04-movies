import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "c5b6d1c476fec4a581a7ffaf65618b81";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

const fetchMoviesTrending = async () => {
  try {
    const { data } = await axios.get("/trending/all/day");
    return data.results;
  } catch (error) {
    console.log("error ", { error });
    return [];
  }
};

const fetchMoviesKeyword = async (query) => {
  try {
    const { data } = await axios.get(`/search/movie`, {
      params: {
        page: 1,
        query,
      },
    });
    return data.results;
  } catch (error) {
    console.log("error ", { error });
    return [];
  }
};

const fetchMoviesId = async (id) => {
  try {
    const { data } = await axios.get(`/movie/${id}`);
    return data;
  } catch (error) {
    console.log("error ", { error });
    return [];
  }
};

const fetchMoviesCast = async (id) => {
  try {
    const { data } = await axios.get(`/movie/${id}/credits`);
    return data.cast;
  } catch (error) {
    console.log("error ", { error });
    return [];
  }
};

const fetchMoviesReview = async (id) => {
  try {
    const { data } = await axios.get(`/movie/${id}/reviews`);
    return data.results;
  } catch (error) {
    console.log("error ", { error });
    return [];
  }
};

export default {
  fetchMoviesTrending,
  fetchMoviesKeyword,
  fetchMoviesId,
  fetchMoviesCast,
  fetchMoviesReview,
};

// const fetchMoviesCast = (id) => {
//   return axios
//     .get(`${baseUrl}/movie/${id}/credits?api_key=${apiKey}`)
//     .then((response) => response.data.cast);
// };

// const fetchMoviesReview = (id) => {
//   return axios
//     .get(`${baseUrl}/movie/${id}/reviews?api_key=${apiKey}`)
//     .then((response) => response.data.results);
// };

// const fetchMoviesTrending = () => {
//   return axios
//     .get(`${baseUrl}/trending/all/day?api_key=${apiKey}`)
//     .then((response) => response.data.results);
// };

// const fetchMoviesKeyword = (keyword) => {
//   return axios
//     .get(`${baseUrl}/search/movie/?api_key=${apiKey}&page=1&query=${keyword}`)
//     .then((response) => response.data.results);
// };

// const fetchMoviesId = (id) => {
//   return axios
//     .get(`${baseUrl}/movie/${id}?api_key=${apiKey}`)
//     .then((response) => response.data);
// };
