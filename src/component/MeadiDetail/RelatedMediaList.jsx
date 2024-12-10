import MovieCard from "@component/MovieCard";

const RelatedMediaList = ({ mediaList = [] }) => {
  const validMediaList = mediaList.filter((media) => media?.id); 

  return (
    <div>
      <p className="font-bold text-[1.4vw] mb-4">More like this</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        {validMediaList.map((media) => (
          <MovieCard
            key={media.id}
            id={media.id}
            title={media.title || "Unknown Title"}
            releaseDate={media.release_date || "Unknown Date"}
            poster={media.poster_path || "/default-poster.jpg"}
            point={media.vote_average ? Math.round(media.vote_average ) : "N/A"}
            mediaType={media.media_type || "Unknown Type"}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedMediaList;
