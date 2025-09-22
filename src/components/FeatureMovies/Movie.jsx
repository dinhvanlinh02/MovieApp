import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const Movie = () => {
  return (
    <div>
      {" "}
      <img
        src="https://image.tmdb.org/t/p/original/1RgPyOhN4DRs225BGTlHJqCudII.jpg"
        className="aspect-video brightness-50"
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="font-bold sm:text-[2vw] mb-2">Inside out 2</p>
        <div>
          <p className="text-gray-400 border border-gray-400 inline-block p-1 mb-1">
            PG13
          </p>
          <p className="text-[1.2vw]">2024-06-11</p>
        </div>
        <div>
          <div className="hidden sm:block text-[1.2vw]">
            <p className="font-bold mb-2">Overview</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quam, voluptatibus atque quisquam nisi sint quas dicta
              fugiat fugit maxime dolore, doloribus sunt pariatur? Vero
              repudiandae veniam iure culpa beatae. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Aspernatur quam, voluptatibus atque
              quisquam nisi sint quas dicta fugiat fugit maxime dolore,
              doloribus sunt pariatur? Vero repudiandae veniam iure culpa
              beatae.
            </p>
          </div>
          <div className="mt-4">
            <button className="bg-white text-black py-2 px-4 rounded text-10 lg:text-lg mr-2">
              <FontAwesomeIcon icon={faPlay} />
              Trailer
            </button>
            <button className="bg-slate-300/35  py-2 px-4 rounded text-10 lg:text-lg">
              View Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
