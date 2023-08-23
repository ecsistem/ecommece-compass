import "./ReturnNextButton.css";

import arrowLeft from "../../assets/images/Icons/arrow_left.svg";

function ReturnButton() {
  return (
    <>
      <button className="arrowButton">
        <img src={arrowLeft} alt="arrow" />
      </button>
    </>
  );
}

export default ReturnButton;
