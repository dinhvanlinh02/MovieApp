import MovieCard from "@components/MovieCard";
import React from "react";

const RelatedMediaList = ({ mediaList = [] }) => {
  if (!Array.isArray(mediaList) || mediaList.length === 0) {
    return null; // hoặc return <p>No related movies</p>;
  }

  return (
    <div>
      <p className="font-bold text-[1.4vw] mb-4">More Like This</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        {mediaList.map((media) => (
          <MovieCard
            key={media.id}
            id={media.id}
            title={media.title || media.name}
            releaseDate={media.release_date || media.first_air_date}
            poster={media.poster_path}
            point={Math.round(media.vote_average)}
            mediaType={media.media_type || "movie"}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedMediaList;
