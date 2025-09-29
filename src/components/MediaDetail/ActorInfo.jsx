// eslint-disable-next-line no-unused-vars
const ActorInfo = ({ id, name, character, profilePath }) => {
  return (
    <div className="border border-slate-300 shadow-sm rounded-lg bg-black text-white">
      <div>
        <img
          className="rounded-lg"
          src={
            profilePath
              ? `https://media.themoviedb.org/t/p/w276_and_h350_face/${profilePath} `
              : "/276x350 (1).svg"
          }
          alt={name}
        />
        <div className="p-3">
          <p className="font-bold">{name}</p>
          <p>{character}</p>
        </div>
      </div>
    </div>
  );
};

export default ActorInfo;
