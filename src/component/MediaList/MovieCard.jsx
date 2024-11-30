import CircularProgresBar from "./CircularProgresBar"

const MovieCard = ({title,releaseDate,poster,point,mediaType}) => {

  return (
    <div className=" border border-slate-800 rounded-lg relative">
      {mediaType == 'tv' && (
          <p className="absolute right-1 top-1 bg-black text-white p-1 text-sm rounded shadow-md">TV Show</p>
      )}
      <img className="rounded-lg" src={`https://image.tmdb.org/t/p/original${poster}`} alt="" />
    <div className="px-4 py-2 relative -top-[30px]">
      <CircularProgresBar percent={Math.round(point*10)} strokeColor ={point >= 7 ? 'green' : point >=5 ? 'orange' :'red' }/>
      <p className="font-bold mt-2">{title}</p>
      <p className="text-slate-300">{releaseDate}</p>
    </div>
    </div>
  )
}

export default MovieCard