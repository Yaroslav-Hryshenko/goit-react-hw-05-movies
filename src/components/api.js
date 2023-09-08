import axios from 'axios';

const API_KEY = 'fa6968baf8e484e1bec62141734a6157';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;

const options = {
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTY5NjhiYWY4ZTQ4NGUxYmVjNjIxNDE3MzRhNjE1NyIsInN1YiI6IjY0ZWRhY2RkNTk0Yzk0MDEzOWNhNDg0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lf9J7fTsrmXJHha5JIzjUpEXzBpdwx47j_R7so2xGhM',
  },
};

export const getFilms = async () => {
  const { data } = await axios.get(
    `trending/movie/day?api_key=${API_KEY}`,
    options
  );
  return data;
};

export const getFilmsId = async id => {
  const { data } = await axios.get(`movie/${id}?api_key=${API_KEY}`, options);
  return data;
};

export const getFilmsCast = async id => {
  const { data } = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}`,
    options
  );
  return data;
};

export const getFilmReviews = async id => {
  const { data } = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}`,
    options
  );
  return data;
};

export const getFilmSearch = async query => {
  const { data } = await axios.get(
    `search/movie?query=${query}&include_adult=false&api_key=${API_KEY}&page=1`,
    options
  );
  return data;
};
