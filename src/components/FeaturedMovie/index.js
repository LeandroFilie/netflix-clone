import { useEffect, useState } from "react";
import { getFeaturedMovie } from "../../services/api";

export default function FeaturedMovie(){
  const [ featuredMovie, setFeaturedMovie ] = useState([]);

  useEffect(() => {
    (async () => {
      const movies = await getFeaturedMovie();
      const movie = movies.results[Math.floor(Math.random() * movies.results.length - 1)];
      setFeaturedMovie(movie);
    })();
  }, [])

  const urlImage = featuredMovie?.backdrop_path && `https://image.tmdb.org/t/p/original/${featuredMovie?.backdrop_path}`;

  return (
    <article>
      <img src={urlImage} alt="Filme em Destaque" />
    </article>
  )
}