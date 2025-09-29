import React, { useEffect } from "react";

const PaginateIndicator = ({ Movies, activeMovieId, setActiveMovieId }) => {
  useEffect(() => {
    if (!Movies || Movies.length === 0) return; // Không chạy nếu chưa có dữ liệu

    const interval = setInterval(() => {
      const currentIndex = Movies.findIndex((m) => m.id === activeMovieId);

      // Nếu không tìm thấy id, nhảy về phần tử đầu tiên
      const nextIndex =
        currentIndex === -1 ? 0 : (currentIndex + 1) % Movies.length;

      if (Movies[nextIndex]) {
        setActiveMovieId(Movies[nextIndex].id);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [Movies, activeMovieId, setActiveMovieId]);

  if (!Movies || Movies.length === 0) return null; // Không render nếu không có Movies

  return (
    <div className="absolute right-8 bottom-[10%]">
      <ul className="flex gap-2 cursor-pointer">
        {Movies.map((movie) => (
          <li
            key={movie.id}
            onClick={() => setActiveMovieId(movie.id)} // click đổi phim
            className={`w-6 h-2 rounded-full transition-colors ${
              movie.id === activeMovieId ? "bg-slate-100" : "bg-slate-600"
            }`}
          />
        ))}
      </ul>
    </div>
  );
};

export default PaginateIndicator;
