
import PaginateIndicator from "./PaginateIndicator"
import Movies from "./Movies"
import { useEffect, useState } from "react";

const FeatureMovie = () => {
const [movie,setmovie] = useState([]);
const [activeMovieId,setactiveMovieId]=useState();
useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/popular',{
    method:'GET',
    headers:{
      accept:'application/json',
      Authorization :`Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTdmMzliNGJjODVjZmJjYWU2NjQxY2ExMDBiZTI1YiIsIm5iZiI6MTczMjYwNDYxMC4yNTU4MzQ2LCJzdWIiOiI2NzQ1NzE2Y2Q0MDE0YzJkYjc3MGMwNmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.x0u525V4y45878bcDFmXpe97yVUDp3zw76bcc8Baa1Q
  `
    }
   })
  .then(async(res)=>{
  const data = await res.json();
  console.log({data});
  const popularMovie = data.results.slice(0,4);
  setmovie(popularMovie);
  setactiveMovieId(popularMovie[0].id);
  });
},[])
 
console.log(movie);

  return (
    <div className="relative text-white">
      {movie.filter(movie=>movie.id==activeMovieId).map(movie =><Movies key={movie.id} data={movie}/>)}
   
   <PaginateIndicator movies = {movie} activeMovieId ={activeMovieId} setactiveMovieId = {setactiveMovieId}/>
</div>
  )
}

export default FeatureMovie