/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@/components/MediaDetail/RelatedMediaList";
import MovieIndomation from "@components/MediaDetail/MovieIndomation";
import useFetch from "@/hooks/useFetch";

const MovieDetail = () => {
  const { id } = useParams();

  // Lấy chi tiết phim
  const { data: movieDetail, isLoading } = useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits`,
  });

  // Lấy phim liên quan (recommendations)
  const { data: relatedMovies, isLoading: isRelatedMovieLoading } = useFetch({
    url: `/movie/${id}/recommendations`,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <div className="w-8 h-8 border-4 border-slate-900 border-t-slate-200 rounded-full animate-spin"></div>
        <p className="mt-2">Loading...</p>
      </div>
    );
  }

  if (!movieDetail) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <p>No movie detail found</p>
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
            <RelatedMediaList
              mediaList={relatedMovies?.results?.slice(0, 12) || []}
            />
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
