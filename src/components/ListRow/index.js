import { useEffect, useState } from "react"
import { getMovies } from "../../services/api";

export default function ListRow({ title, endpoint }){
  const [ list, setList ] = useState([]);

  useEffect(() => {
    (async () => {
      const movie = await getMovies(endpoint);
      setList(movie.results);
    })();
  }, [endpoint])


  return (
    <article>
      <h3>{title}</h3>
      {
        list.map((movie, key) => (
          <p key={key}>{movie.title || movie.name || movie.original_name || movie.original_title}</p>
        ))
      }
      ..
      <hr />
    </article>
  )
}