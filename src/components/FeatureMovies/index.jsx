import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";

const FeatureMovies = () => {
  return (
    <div>
      <div className="relative text-white">
        <Movie />
        <PaginateIndicator />
      </div>
    </div>
  );
};

export default FeatureMovies;
