import React from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

export default function RecipeProfile({ recipe }) {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div
        className="card"
        onClick={() => window.open(recipe["recipe"]["url"])}
      >
        <img className="cardPicture" src={recipe["recipe"]["image"]} />
        <p className="cardName" key={uuidv4()}>
          {recipe["recipe"]["label"]}
        </p>
      </div>
    )
  );
}
