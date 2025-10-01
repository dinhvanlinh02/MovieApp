import { useEffect, useState } from "react";
import MovieCard from "@components/MovieCard";
import useFetch from "@/hooks/useFetch"; // ✅ import custom hook

const MediaList = ({ title, tabs }) => {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id || null);
  const [mediaList, setMediaList] = useState([]);

  // lấy url theo tab hiện tại
  const activeUrl = tabs.find((tab) => tab.id === activeTabId)?.url;

  // gọi API bằng hook
  const { data, isLoading, error } = useFetch({
    url: activeUrl || "",
  });

  // xử lý khi có data mới
  useEffect(() => {
    if (data?.results) {
      const trendingMediaList = data.results.slice(0, 12);
      setMediaList(trendingMediaList);
    }
  }, [data]);

  return (
    <div className="px-8 text-[1.2vw] py-10 bg-black text-white">
      <div className="flex items-center gap-4 mb-6">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex border border-white rounded">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`px-2 py-1 rounded cursor-pointer ${
                activeTabId === tab.id ? "bg-white text-black" : ""
              }`}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>

      {isLoading && (
        <div className="text-center py-6">
          <div className="w-8 h-8 mx-auto border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
          <p className="mt-2">Loading...</p>
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 py-6">
          <p>Error: {error}</p>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {mediaList.map((media) => (
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
