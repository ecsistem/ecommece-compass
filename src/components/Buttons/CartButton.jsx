/* import { useEffect, useState } from "react"; */

import classes from "./Button.module.css";

import cartlogo from "../../assets/images/Icons/cart.svg";

function CartButton() {
  return (
    <>
      <button className={classes.cartButton}>
        Carrinho
        <img src={cartlogo} alt="icon" />
      </button>
    </>
  );
}

export default CartButton;
