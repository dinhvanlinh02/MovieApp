import { useState, useEffect } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";
import useFetch from "@/hooks/useFetch"; // ✅ import custom hook

const FeatureMovies = () => {
  const { data, isLoading, error } = useFetch({
    url: "/movie/popular", // API endpoint
  });

  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState(null);

  useEffect(() => {
    if (data?.results) {
      const popularMovies = data.results.slice(0, 4); // lấy 4 phim đầu
      setMovies(popularMovies);
      if (popularMovies.length > 0) {
        setActiveMovieId(popularMovies[0].id);
      }
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 text-white">
        <div className="w-8 h-8 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
        <p className="ml-3">Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64 text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="relative text-white">
        {movies
          .filter((movie) => movie.id === activeMovieId)
          .map((movie) => (
            <Movie key={movie.id} data={movie} />
          ))}
        <PaginateIndicator
          movies={movies}
          activeMovieId={activeMovieId}
          setActiveMovieId={setActiveMovieId}
        />
      </div>
    </div>
  );
};

export default FeatureMovies;
