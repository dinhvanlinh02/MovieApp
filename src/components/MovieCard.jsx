import { Link } from "react-router-dom";
import CircularProgressBar from "./CircularProgressBar";

const MovieCard = ({ id, title, releaseDate, poster, point, mediaType }) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="border border-slate-800 rounded-lg relative">
        {mediaType === "tv" && (
          <span className="absolute right-2 top-2 bg-red-600 text-white px-2 py-0.5 text-xs font-semibold rounded-md shadow">
            TV Show
          </span>
        )}

        <img
          className="rounded-lg"
          src={`https://image.tmdb.org/t/p/w500${poster}`}
        />
        <div className="px-4  relative -top-[1.5vw]">
          <CircularProgressBar
            percen={Math.round(point * 10)}
            strokeColor={point >= 7 ? "green" : point >= 5 ? "orange" : "red"}
          />
          <p className="font-bold mt-2">{title}</p>
          <p className="text-slate-300">{releaseDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
