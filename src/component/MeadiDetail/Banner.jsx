import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { groupBy } from "lodash";


const Banner = ({mediaInfo}) => {
    const certification= ((mediaInfo.release_dates?.results || []).find(result => result.iso_3166_1 ==='US')?.release_dates || []).find(releaseDate => releaseDate.certification)?.certification;
    const crews = (mediaInfo.credits?.crew || [])
    .filter(crew => ['Director', 'Screenplay', 'Writer'].includes(crew.job))
    .map(crew => ({ id: crew.id, job: crew.job, name: crew.name }));
  
  const groupCrews = groupBy(crews,'job')
  console.log({crews,groupCrews});
return (
  
    <div className="relative text-white overflow-hidden">
      {/* Background image */}
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-[.2] z-[-1]"
        src={`https://image.tmdb.org/t/p/original${mediaInfo.backdrop_path}`}
        alt="Movie Background"
      />

      {/* Content container */}
      <div className="flex flex-wrap px-6 py-8">
        {/* Movie poster */}
        <div className="flex-1 max-w-sm">
          <img
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${mediaInfo.poster_path}`}
            alt="Movie Poster"
            className="w-full rounded-lg"
          />
        </div>

        {/* Movie details */}
        <div className="flex-[2] pl-6">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-4">{mediaInfo.title}</h1>

          {/* Metadata */}
          <div className="mb-4 space-y-2">
            <div className="flex items-center gap-x-6">
              <span className="bg-green-500 text-white px-2 py-1 rounded">{certification}</span>
              <p className="text-gray-300">{mediaInfo.release_date
              }</p>
              <p className="text-gray-300 truncate">{(mediaInfo.genres || []).map(genres=>genres.name).join(",")}</p>

            </div>
            <p className="text-gray-200">
             
            </p>
          </div>

          {/* Rating and trailer */}
          <div className="flex items-center gap-4 mb-6">
          <div className="relative flex items-center justify-center w-20 h-20">
  {/* Vòng tròn khuyết */}
  <div
    className="absolute inset-0 rounded-full"
    style={{
      background: `conic-gradient(
        #facc15 ${Math.round((mediaInfo.vote_average || 0) * 10)}%, 
        #374151 ${Math.round((mediaInfo.vote_average || 0) * 10)}% 
      )`,
    }}
  ></div>
  {/* Nền trắng */}
  <div className="absolute inset-2 bg-black rounded-full"></div>
  {/* Số điểm */}
  <div className="relative text-yellow-400 font-bold text-lg">
    {Math.round((mediaInfo.vote_average || 0) * 10)}
  </div>
  </div>

            <button
              className="bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-red-500"
              aria-label="Watch Trailer"
            >
              <FontAwesomeIcon icon={faPlay} />
              Trailer
            </button>
          </div>

          {/* Overview */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Overview</h2>
            <p>
              {mediaInfo.overview}
            </p>
          </section>

       {/* Crew information */}
<div className="grid grid-cols-2 gap-4">
  {Object.keys(groupCrews).map(job => (
    <div key={job}>
      <p className="font-bold">{job}</p>
      <p>{groupCrews[job].map(crew => crew.name).join(", ")}</p>
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
