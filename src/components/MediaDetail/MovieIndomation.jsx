import React from "react";

const MovieIndomation = ({ movieInfo }) => {
  return (
    <div className="mb-4 text-[1.4vw] font-bold">
      <div className="mb-4">
        <p className="font-bold">Orignal Title</p>
        <p>{movieInfo.original_title}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        <div className="flex gap-2">
          {(movieInfo.origin_country || []).map((countryCode) => (
            <img
              key={countryCode}
              src={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`}
              alt={countryCode}
              className="w-8 h-6 object-cover rounded"
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{movieInfo.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Budget</p>
        <p>{movieInfo.budget}</p>{" "}
      </div>
      <div className="mb-4">
        <p className="font-bold">Revenue</p>
        <p>{movieInfo.revenue}</p>
      </div>
    </div>
  );
};

export default MovieIndomation;
