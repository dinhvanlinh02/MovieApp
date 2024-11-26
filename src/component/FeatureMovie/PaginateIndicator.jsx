import { useEffect } from "react";

const PaginateIndicator = ({ movies, activeMovieId, setactiveMovieId }) => {
  useEffect(() => {
    const autoSwitch = setInterval(() => {
      const currentIndex = movies.findIndex((movie) => movie.id === activeMovieId);
      const nextIndex = (currentIndex + 1) % movies.length; // Tự quay vòng
      setactiveMovieId(movies[nextIndex].id); // Cập nhật trang tiếp theo
    }, 4000); // 4 giây

    return () => clearInterval(autoSwitch); // Xóa khi không dùng nữa
  }, [movies, activeMovieId, setactiveMovieId]);

  return (
    <div className="absolute right-8 bottom-[10%]">
      <ul className="flex gap-1">
        {movies.map((movie) => (
          <li
            key={movie.id}
            onClick={() => setactiveMovieId(movie.id)} // Chọn thủ công
            className={`h-1 w-6 cursor-pointer ${
              movie.id === activeMovieId ? "bg-slate-100" : "bg-slate-600"
            }`}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default PaginateIndicator;
