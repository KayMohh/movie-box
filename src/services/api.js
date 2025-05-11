const API_KEY = "a23d46de2728fc2b7f88e41097f75546"
const BASE_URL = "https://api.themoviedb.org/3"






export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    console.log(response)
    const data = await response.json();
    console.log(data)
    return data.results;
  };
  
export const searchMovies = async (query) => {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`
    );
    const data = await response.json();
    return data.results;
  };
  