import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";



const MediaList = ({title,tabs}) => {
  const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setactiveTabId] = useState(tabs[0]?.id);

  useEffect(() => {
   const url = tabs.find( tab => tab.id == activeTabId)?.url
   if(url){
    fetch( url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTdmMzliNGJjODVjZmJjYWU2NjQxY2ExMDBiZTI1YiIsIm5iZiI6MTczMjYwNDI2OC4yMjIwMDAxLCJzdWIiOiI2NzQ1NzE2Y2Q0MDE0YzJkYjc3MGMwNmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WQLz08k7Pne5YxYcBkXOEhMcwoPDB-aHTLolZY-szLM",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        const trendingMedia = data.results ? data.results.slice(0, 12) : [];
        setMediaList(trendingMedia);
      })
      .catch((err) => console.error("Error fetching data:", err));
   }
   
  }, [activeTabId,tabs]);

  return (
    <div className="px-8 text-[1.2vw] py-10">
      <div className="flex items-center gap-4 mb-6 bg-black text-white">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex border border-white rounded">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`px-2 py-1 cursor-pointer rounded ${
                tab.id === activeTabId ? "bg-white text-black" : ""
              }`}
              onClick={() => setactiveTabId(tab.id)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {mediaList.length > 0 ? (
          mediaList.map((media) => (
            <MovieCard
              key={media.id || media.name}
              title={media.title || media.name}
              releaseDate={media.release_date || media.first_air_date}
              poster={media.poster_path || "/default-poster.jpg"}
              point={media.vote_average}
              mediaType={media.media_type||activeTabId}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MediaList;
