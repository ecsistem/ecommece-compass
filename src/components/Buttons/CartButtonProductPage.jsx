import cartlogoGreen from "../../assets/images/Icons/cartlogoGreen.svg";

import "./CartButtonProductPage.css"

function CartButtonProductPage() {
    return (
      <>
        <button className="cartButtonPage">
          Carrinho
          <img src={cartlogoGreen} alt="icon" />
        </button>
      </>
    );
  }
  
  export default CartButtonProductPage;
  