import "./ReturnNextButtonBanner.css";

import arrowLeft from "../../assets/images/Icons/arrow_left.svg";

function ReturnButtonBanner() {
  return (
    <>
      <button className="arrowButtonBanner">
        <img className="arrowBanner" src={arrowLeft} alt="arrowBanner" />
      </button>
    </>
  );
}

export default ReturnButtonBanner;
