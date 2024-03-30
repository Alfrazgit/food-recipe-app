import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await res.json();

      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddToFavourites(getCurrentItem) {
    let prevFavouritesList = [...favouritesList];
    const index = prevFavouritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      prevFavouritesList.push(getCurrentItem);
    } else {
      prevFavouritesList.splice(index);
    }

    setFavouritesList(prevFavouritesList);
  }

  console.log(favouritesList);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        recipeDetailsData,
        setSearchParam,
        setRecipeDetailsData,
        handleSubmit,
        handleAddToFavourites,
        favouritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
