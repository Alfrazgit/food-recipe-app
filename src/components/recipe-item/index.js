import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div className="flex flex-col overflow-hidden w-80 p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className="h-40 flex justify-center items-center overflow-hidden rounded-xl">
        <img src={item?.image_url} alt={item?.title} className="block w-full" />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {item?.title}
        </h3>
        <Link
          to={`./recipe-item/${item?.id}`}
          className="text-sm p-3 px-8 mt-5 uppercase bg-black text-white rounded-lg font-medium tracking-wide inline-block shadow-md"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeItem;
