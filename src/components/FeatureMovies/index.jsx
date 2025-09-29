import { useCallback, useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";

const FeatureMovies = () => {
  const [Movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState(null);

  const fetchMovies = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTdmMzliNGJjODVjZmJjYWU2NjQxY2ExMDBiZTI1YiIsIm5iZiI6MTczMjYwNDI2OC4yMjIwMDAxLCJzdWIiOiI2NzQ1NzE2Y2Q0MDE0YzJkYjc3MGMwNmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WQLz08k7Pne5YxYcBkXOEhMcwoPDB-aHTLolZY-szLM`,
          },
        }
      );

      const jsonResponse = await response.json();
      const popularMovies = jsonResponse.results.slice(0, 4);
      setMovies(popularMovies);
      setActiveMovieId(popularMovies[0].id);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div>
      <div className="relative text-white">
        {Movies.filter((movie) => movie.id === activeMovieId).map((movie) => (
          <Movie key={movie.id} data={movie} />
        ))}
        <PaginateIndicator
          Movies={Movies}
          activeMovieId={activeMovieId}
          setActiveMovieId={setActiveMovieId}
        />
      </div>
    </div>
  );
};

export default FeatureMovies;
