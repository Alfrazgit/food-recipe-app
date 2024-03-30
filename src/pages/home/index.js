import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

const Home = () => {
  const { loading, recipeList } = useContext(GlobalContext);

  if (loading) return <>Loading... Please be patient.</>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-evenly gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-6xl text-xl text-center text-black font-extrabold">
            Nothing to show... Please search.
          </p>
        </div>
      )}
      <div className="grow"></div>
    </div>
  );
};

export default Home;
