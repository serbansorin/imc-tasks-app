// use this function to make API requests to a different server besode, kind of like axios

const API_URL = 'http://api.laravel.test/api';

/**
 * Use instead of fetch to make API requests and return the data
 * 
 * @param {*} endpoint 
 * @param {*} options 
 * @returns 
 */
async function fetchFromAPI(endpoint, options) {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

export { fetchFromAPI };