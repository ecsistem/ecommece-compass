import "./ReturnNextButtonBanner.css";

import arrowRight from "../../assets/images/Icons/arrow_right.svg";

function NextButtonBanner() {
  return (
    <>
      <button className="arrowButtonBanner">
        <img className="arrowBanner" src={arrowRight} alt="arrowBanner" />
      </button>
    </>
  );
}

export default NextButtonBanner;
