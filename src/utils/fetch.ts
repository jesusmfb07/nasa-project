const API_KEY = 'dyrPsjf3srz2zovnqTG2OfedC9bLloz2Tt8HRYEY';
const API_URL = 'https://api.nasa.gov/planetary/apod';

export default async function fetchNasaData(urlParams = '') {
  try {
    const response = await fetch(
        `${API_URL}?api_key=${
            API_KEY}${urlParams ? `&${urlParams}` : ''}`);
    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}
