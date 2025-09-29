import React from "react";
import CircularProgressBar from "../CircularProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { groupBy } from "lodash";

const Banner = ({ mediaInfo }) => {
  const certification = (
    (mediaInfo.release_dates?.results || []).find(
      (results) => results.iso_3166_1 === "US"
    )?.release_dates || []
  ).find((releaseDate) => releaseDate.certification)?.certification;

  const crews = (mediaInfo.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));

  const groupedCrews = groupBy(crews, "job");
  return (
    <div>
      {" "}
      <div className="relative text-white overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/original/${mediaInfo.backdrop_path}`}
          className="absolute inset-0 brightness-[.2]"
          alt="backdrop"
        />
        <div className="flex relative max-w-xl mx-auto px-6 py-10 sm:gap-8 gap-6">
          <div className="flex-1">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${mediaInfo.poster_path}`}
              alt="poster"
            />
          </div>
          <div className="flex-[2] text-[1.2vw]">
            <p className="font-bold mb-2 text-[2vw] text-lg lg:text-[2vw] ">
              {mediaInfo.title}
            </p>
            <div className="flex gap-4 items-center">
              {certification && (
                <span className="text-gray-400 border border-gray-400 p-1 ">
                  {certification}
                </span>
              )}
              <p>{mediaInfo.release_date}</p>
              <p>
                {(mediaInfo.genres || []).map((genre) => genre.name).join(", ")}
              </p>
            </div>
            <div className="flex mt-4 items-center gap-4">
              <div className="flex items-center gap-2">
                <CircularProgressBar
                  percen={Math.round(mediaInfo.vote_average * 10)}
                  size={3.5}
                  strokeWidth={0.3}
                />
                Rating
              </div>
              <button>
                <FontAwesomeIcon icon={faPlay} className="mr-1" />
                Trailer
              </button>
            </div>
            <div>
              <p className="text-[1.3vw] font-bold mb-2">Overview</p>
              <p>{mediaInfo.overview}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {Object.keys(groupedCrews).map((job) => (
                <div key={job}>
                  <p className="font-bold">{job}</p>
                  <p>
                    {groupedCrews[job].map((person) => person.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
