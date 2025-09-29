import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@/components/MediaDetail/RelatedMediaList";
import MovieIndomation from "@components/MediaDetail/MovieIndomation";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetailRelated, setmovieDetailRelated] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [isRelatedMovieisLoading, setRealatedMovieListLoading] =
    useState(false);
  const fetchMoviesDetail = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTdmMzliNGJjODVjZmJjYWU2NjQxY2ExMDBiZTI1YiIsIm5iZiI6MTczMjYwNDI2OC4yMjIwMDAxLCJzdWIiOiI2NzQ1NzE2Y2Q0MDE0YzJkYjc3MGMwNmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WQLz08k7Pne5YxYcBkXOEhMcwoPDB-aHTLolZY-szLM`,
          },
        }
      );

      const jsonResponse = await response.json();
      setMovieDetail(jsonResponse);
      console.log(jsonResponse);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchMoviesDetail();
  }, [fetchMoviesDetail]);

  // const certification = (
  //   (movieDetail.release_dates?.results || []).find(
  //     (results) => results.iso_3166_1 === "US"
  //   )?.release_dates || []
  // ).find((releaseDate) => releaseDate.certification)?.certification;

  // const crews = (movieDetail.credits?.crew || [])
  //   .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
  //   .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));

  // const groupedCrews = groupBy(crews, "job");

  const fetchMoviesDetailRelatedList = useCallback(async () => {
    setRealatedMovieListLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTdmMzliNGJjODVjZmJjYWU2NjQxY2ExMDBiZTI1YiIsIm5iZiI6MTczMjYwNDI2OC4yMjIwMDAxLCJzdWIiOiI2NzQ1NzE2Y2Q0MDE0YzJkYjc3MGMwNmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WQLz08k7Pne5YxYcBkXOEhMcwoPDB-aHTLolZY-szLM`,
          },
        }
      );

      const jsonResponse = await response.json();
      const curentRelaedMovies = (jsonResponse.results || []).slice(0, 12);
      setmovieDetailRelated(curentRelaedMovies);
      console.log(jsonResponse);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setRealatedMovieListLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchMoviesDetailRelatedList();
  }, [fetchMoviesDetailRelatedList]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <div className="w-8 h-8 border-4 border-slate-900 border-t-slate-200 rounded-full animate-spin"></div>
        <p className="mt-2">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Banner mediaInfo={movieDetail} />
      <div className="bg-black text-white">
        <div className="mx-auto flex max-w-screen-xl px-6 py-10 gap-6">
          <div className="flex-[2]">
            <ActorList actor={movieDetail.credits?.cast || []} />
            <RelatedMediaList mediaList={movieDetailRelated} />
          </div>
          <div className="flex-1">
            <MovieIndomation movieInfo={movieDetail} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
