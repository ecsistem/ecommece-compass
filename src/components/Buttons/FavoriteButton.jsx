import { useState } from "react";

import classes from "./Button.module.css";

import heart from "../../assets/images/Icons/like.svg";

export function FavoriteButton() {
  const [favorite, setFavorite] = useState(false);

  const favoriteHandler = () => {
    setFavorite(!favorite);
  };

  return (
    <button
      className={`${classes.favoriteButton} ${
        favorite ? classes.selected : ""
      }`}
      onClick={favoriteHandler}
    >
      <img src={heart} alt="icon" />
    </button>
  );
}
