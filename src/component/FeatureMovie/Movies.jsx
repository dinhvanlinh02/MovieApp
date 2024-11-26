import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Movies = (props) => {
    console.log(props);
    const {data = {}}=props;
    const {backdrop_path,title,overview,release_date }= data;
    
  return (
    <div> <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} className="aspect-video brightness-50" alt="" />
    <div className="absolute bottom-[17%] left-8 w-1/2 sm:w-1/3">
   <p className="font-bold sm:text-[2vw] mb-2">{title}</p>    
   <div>
   {/* <p className="text-gray-400 border border-gray-400 inline-block p-1 mb-1"> PG13 </p> */}
   <p className="text-[1.2vw]">{release_date}</p>
   </div>
   <div>
   <div className="hidden sm:block text-[1.2vw] mt-4"> 
   <p className="font-bold mb-2">Overview</p>
   <p>{overview}
   </p>
   </div>
   <div className="mt-4 flex space-x-2">
   <button
   className="bg-white text-black py-2 px-4 rounded text-10 flex items-center hover:bg-gray-200 transition"
   >
   <FontAwesomeIcon icon={faPlay} className="mr-2" />
   Trailer
   </button>
   <button
   className="bg-blue-500 text-white py-2 px-4 rounded text-[10px] hover:bg-blue-600 transition"
   >
   View Detail
   </button>
   </div>
   
        </div>
     </div>
     </div>
  )
}

export default Movies