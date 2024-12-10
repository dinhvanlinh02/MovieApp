import { useState } from "react"
import ActorInfo from "./ActorInfo"

const ActorList = ({actors = []}) => {
  const [isShowMore,setisShowMore]= useState(false);
  const currentActor =isShowMore ? actors.slice(0,32):actors.slice(0,4);
  return (
    <div>
  <p className="font-bold text-[1.4vw] mb-4 ">Actors</p>

<div className='grid grid-cols-3 sm:grid-cols-4'>
{
  currentActor.map(actor=><  ActorInfo key={actor.id}
  id={actor.id} name={actor.name} character = {actor.charecter}
  profilePath={actor.profile_path}
 />)
}

{/* <ActorInfo/>
<ActorInfo/>
<ActorInfo/>
<ActorInfo/> */}




</div>
<p className="cursor-pointer mt-1" onClick={()=>{
  setisShowMore(!isShowMore)
}}>{isShowMore?"Show Less":"Show More"}</p>

    </div>
  
  )
}

export default ActorList