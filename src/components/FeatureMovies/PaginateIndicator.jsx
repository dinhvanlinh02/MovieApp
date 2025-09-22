import React from "react";

const PaginateIndicator = () => {
  return (
    <div className="absolute right-8 bottom-[10%]">
      <ul className="flex gap-2 cursor-pointer">
        <li className="w-6 h-2 bg-slate-100 rounded-full"></li>
        <li className="w-6 h-2 bg-slate-600 rounded-full"></li>
        <li className="w-6 h-2 bg-slate-600 rounded-full"></li>
        <li className="w-6 h-2 bg-slate-600 rounded-full"></li>
      </ul>
    </div>
  );
};

export default PaginateIndicator;
