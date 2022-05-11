export const categories = [
  {
    slug: 'originals',
    title: 'Originais do Netflix',
    endpoint: '/discover/tv?with_networks=213&language=pt-BR',
  },
  {
    slug: 'trending',
    title: 'Recomendados para Você',
    endpoint: '/trending/all/week?language=pt-BR',
  },
  {
    slug: 'toprated',
    title: 'Em Alta',
    endpoint: '/movie/top_rated?language=pt-BR',
  },
  {
    slug: 'action',
    title: 'Ação',
    endpoint: '/discover/movie?with_genres=28&language=pt-BR',
  },
  {
    slug: 'comedy',
    title: 'Comédia',
    endpoint: '/discover/movie?with_genres=35&language=pt-BR',
  },
  {
    slug: 'horror',
    title: 'Terror',
    endpoint: '/discover/movie?with_genres=27&language=pt-BR',
  },
  {
    slug: 'romance',
    title: 'Romance',
    endpoint: '/discover/movie?with_genres=10749&language=pt-BR',
  },
  {
    slug: 'documentary',
    title: 'Documentário',
    endpoint: '/discover/movie?with_genres=99&language=pt-BR',
  },
]

const API_KEY = '6932c0373b3569c265e2eb30edb1feca';
const API_BASE_URL = 'https://api.themoviedb.org/3';

export async function getMovies(endpoint){
  try{
    const url = `${API_BASE_URL}${endpoint}&api_key=${API_KEY}`
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('error getMovies', error);
  }
}

export async function getFeaturedMovie(){
  const endpoint = '/discover/tv?with_networks=213&language=pt-BR';

  try{
    const url = `${API_BASE_URL}${endpoint}&api_key=${API_KEY}`
    const response = await fetch(url);
    return await response.json();

  } catch (error) {
    console.log('error getFeatureMovie', error);
  }
}