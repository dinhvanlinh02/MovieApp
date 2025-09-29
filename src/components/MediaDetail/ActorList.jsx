import { useState } from "react";
import ActorInfo from "./ActorInfo";

const ActorList = ({ actor = [] }) => {
  const [isshowMore, setisshowMore] = useState(false);
  const currentActor = isshowMore ? actor.slice(0, 32) : actor.slice(0, 4);
  return (
    <div>
      <p className="font-bold text-[1.4vw] mb-4">Actors</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
        {currentActor.map((a) => (
          <ActorInfo
            key={a.id}
            id={a.id}
            name={a.name}
            character={a.character}
            profilePath={a.profile_path}
          />
        ))}
      </div>
      <p
        onClick={() => setisshowMore(!isshowMore)}
        className="cursor-pointer mt-1 "
      >
        {isshowMore ? "Show Less" : "Show More"}
      </p>
    </div>
  );
};

export default ActorList;
