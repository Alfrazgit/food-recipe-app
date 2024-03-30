import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="flex flex-col justify-between items-center py-8 container mx-auto lg:flex-row gap-5 lg:gap-0">
      <NavLink to={"/"} className="text-black hover:text-gray-700 duration-300">
        <h2 className="text-2xl font-semibold text-slate-600">FoodRecipe</h2>
      </NavLink>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter items..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-100 hover:bg-gray-900 duration-300 mx-1 p-2 rounded-lg"
          >
            Home
          </NavLink>
          <NavLink
            to={"/favourites"}
            className="text-black hover:text-gray-100 hover:bg-gray-900 duration-300 mx-1 p-2 rounded-lg"
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
