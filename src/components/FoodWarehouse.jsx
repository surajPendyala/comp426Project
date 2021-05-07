import Axios from "axios";
import { useState } from "react";
import "./app.css";
import RecipeProfile from "./recipe.js";


function FoodWarehouse() {
  const [state, setState] = useState("");
  const [recipes, setrecipes] = useState([]);
  const url = `https://api.edamam.com/search?q=${state}&app_id=${`fcc677fa`}&app_key=${"944f104fc8a802814e8a5f5e426ecd61"}`;

  const getRecipeInfo = async() => {
    let result = await Axios.get(url);
    setrecipes(result.data.hits);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="Home">
      <h1 onClick={getRecipeInfo}>Recipe Warehouse 📦</h1>
      <form className="searchValue" onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Enter Food Item"
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
        <input className="submit" type="submit" value="Search" />
      </form>

      <div className="recipes">
        {recipes !== null && recipes.map((recipe) => {
            return <RecipeProfile recipe={recipe}/>;
          })}
      </div>
    </div>
  );
}

export default FoodWarehouse;









// Logic influenced by https://www.youtube.com/watch?v=tPqnKDBaMLQ
