import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const OPTIONS = {
  method: 'GET',
  options: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTI3MGJmODZhYjExZTBjY2FmN2YzOGVmMWQ5OWIyZCIsInN1YiI6IjY0YzI0OTY5MmYxYmUwMDE0ZWY2NGE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p5RUI4QQa76RdjJg1YwJtQVcsEnpw3DEDCBEkEwrDLQ',
  },
};
export const refs = {
  baseUrl: 'https://image.tmdb.org/t/p/w500/',
  defaultImg:
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700',
};

export const getTodaysTrending = async () => {
  const options = OPTIONS;
  const responce = await axios.get(`trending/movie/day`, options);
  const data = responce.data;
  return data;
};

export const getMovieDetails = async movieId => {
  const options = OPTIONS;
  const responce = await axios(`movie/${movieId}`, options);
  const movieDelails = responce.data;
  return movieDelails;
};

export const getMoviesBySearch = async query => {
  const options = OPTIONS;
  const responce = await axios(`search/movie?query=${query}`, options);
  const moviesBySearch = responce.data;
  return moviesBySearch;
};

export const getMovieCredits = async movieId => {
  const options = OPTIONS;
  const responce = await axios(`movie/${movieId}/credits?`, options);
  const moviesCredits = responce.data;
  return moviesCredits;
};

export const getMovieReviews = async movieId => {
  const options = OPTIONS;
  const responce = await axios(`movie/${movieId}/reviews?`, options);
  const moviesReviews = responce.data;
  return moviesReviews;
};
