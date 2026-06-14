import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '56210453-84943403f93b7b8a96293ef50';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: PER_PAGE,
      page,
    },
  });
  return response.data;
}
