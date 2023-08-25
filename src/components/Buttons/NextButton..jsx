import "./ReturnNextButton.css";

import arrowRight from "../../assets/images/Icons/arrow_right.svg";

function NextButton({ onClick, disabled }) {
  return (
    <>
      <button className="arrowButton" onClick={onClick} disabled={disabled}>
        <img src={arrowRight} alt="arrow" />
      </button>
    </>
  );
}

export default NextButton;
