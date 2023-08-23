import "./ReturnNextButton.css";

import arrowRight from "../../assets/images/Icons/arrow_right.svg";

function NextButton() {
  return (
    <>
      <button className="arrowButton">
        <img src={arrowRight} alt="arrow" />
      </button>
    </>
  );
}

export default NextButton;
