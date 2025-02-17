import { Link } from "react-router-dom"
import CircularProgresBar from "./CircularProgresBar"
import Image from "./Image"

const MovieCard = ({id,title,releaseDate,poster,point,mediaType}) => {

  return (
    <Link to={`/movie/${id}`}>
     <div className=" border border-slate-800 rounded-lg relative">
      {mediaType == 'tv' && (
          <p className="absolute right-1 top-1 bg-black text-white p-1 text-sm rounded shadow-md">TV Show</p>
      )}
      <Image src={`https://image.tmdb.org/t/p/original${poster}`}
      width={210}
      height={300}
      className={"rounded-lg w-full "}
      />
      {/* <img className="rounded-lg" src={`https://image.tmdb.org/t/p/original${poster}`} alt="" /> */}
    <div className="px-4 py-2 relative -top-[30px]">
      <CircularProgresBar percent={Math.round(point*10)} strokeColor ={point >= 7 ? 'green' : point >=5 ? 'orange' :'red' }/>
      <p className="font-bold mt-2">{title}</p>
      <p className="text-slate-300">{releaseDate}</p>
    </div>
    </div>
    </Link>
   
  )
}

export default MovieCard