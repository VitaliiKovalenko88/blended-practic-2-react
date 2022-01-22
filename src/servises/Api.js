import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY_API = 'd16c53a3a4d5eb154f379745597d6181';

export const getMovies = async page => {
  const response = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${KEY_API}&page=${page}`,
  );
  return response.data;
};
