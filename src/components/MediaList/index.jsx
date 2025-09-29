import { useCallback, useEffect, useState } from "react";
import MovieCard from "@components/MovieCard";

const MediaList = ({ title, tabs }) => {
  const [MediaList, setMediaList] = useState([]);
  const [activetabId, setactivetabId] = useState(tabs[0]?.id);

  const fetchMediaList = useCallback(async () => {
    try {
      const url = tabs.find((tab) => tab.id === activetabId)?.url;
      if (url) {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTdmMzliNGJjODVjZmJjYWU2NjQxY2ExMDBiZTI1YiIsIm5iZiI6MTczMjYwNDI2OC4yMjIwMDAxLCJzdWIiOiI2NzQ1NzE2Y2Q0MDE0YzJkYjc3MGMwNmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WQLz08k7Pne5YxYcBkXOEhMcwoPDB-aHTLolZY-szLM`,
          },
        });

        const jsonResponse = await response.json();
        console.log(jsonResponse);
        const trendingMediaList = jsonResponse.results.slice(0, 12);
        setMediaList(trendingMediaList);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }, [activetabId, tabs]);

  useEffect(() => {
    fetchMediaList();
  }, [fetchMediaList]);

  return (
    <div className="px-8 text-[1.2vw] py-10 bg-black text-white">
      <div className="flex items-center gap-4 mb-6">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex border border-white rounded">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`px-2 py-1 rounded cursor-pointer ${
                activetabId === tab.id ? "bg-white text-black" : ""
              }`}
              onClick={() => setactivetabId(tab.id)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {MediaList.map((media) => (
          <MovieCard
            id={media.id}
            key={media.id}
            title={media.title || media.name}
            releaseDate={media.release_date || media.first_air_date}
            poster={media.poster_path}
            point={media.vote_average}
            mediaType={media.media_type}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
