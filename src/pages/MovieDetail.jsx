import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "@component/Loading";
import Banner from "@component/MeadiDetail/Banner";
import ActorList from "@component/MeadiDetail/ActorList";
import RelatedMediaList from "@component/MeadiDetail/RelatedMediaList";
import MoviewInfomation from "@component/MeadiDetail/MoviewInfomation";
import useFetch from "@hooks/useFetch";

const MovieDetail = () => {
  const { id } = useParams();
  // const [movieInfo, setMovieInfo] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  const [isRelatedMovieListLoading, setIsRelatedMovieListLoading] = useState(false); // Thêm dòng này
  const [relatedMovies, setRelatedMovies] = useState([]);

  // Fetch Movie Details
  const {data:movieInfo,isLoading} = useFetch(
    {
      url:`/movie/${id}?append_to_response=release_dates,credits`,
      
    }
  )


  // Fetch Related Movies
  useEffect(() => {
    setIsRelatedMovieListLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: 
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTdmMzliNGJjODVjZmJjYWU2NjQxY2ExMDBiZTI1YiIsIm5iZiI6MTczMjYwNDI2OC4yMjIwMDAxLCJzdWIiOiI2NzQ1NzE2Y2Q0MDE0YzJkYjc3MGMwNmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WQLz08k7Pne5YxYcBkXOEhMcwoPDB-aHTLolZY-szLM",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        console.log("Recommendations:", data);
        const validMovies = (data.results || []).filter((movie) => movie?.id);
        setRelatedMovies(validMovies.slice(0, 12));
      })
      .catch((err) => console.error(err))
      .finally(() => setIsRelatedMovieListLoading(false)); // Đảm bảo biến này tồn tại
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-white text-[1.2vw]">
        <div className="mx-auto flex max-w-screen-xl px-6 py-10 gap-6">
          <div className="flex-[2]">
            <ActorList actors={movieInfo.credits?.cast || []} />
            {isRelatedMovieListLoading ? (
              <Loading />
            ) : (
              <RelatedMediaList mediaList={relatedMovies} />
            )}
          </div>
          <div>
            <MoviewInfomation mediaInfo={movieInfo}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
