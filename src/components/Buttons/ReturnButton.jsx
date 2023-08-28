import "./ReturnNextButton.css";

import arrowLeft from "../../assets/images/Icons/arrow_left.svg";

import { ButtonPaginationTypes } from "../../types/ButtonPaginationTypes";
function ReturnButton({ onClick, disabled }) {
  return (
    <>
      <button className="arrowButton" onClick={onClick} disabled={disabled}>
        <img src={arrowLeft} alt="arrow" />
      </button>
    </>
  );
}

export default ReturnButton;

ReturnButton.propTypes = ButtonPaginationTypes;
