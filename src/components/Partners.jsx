import React from "react";
import bosch from "../images/partners/Bosch.png";
import hoffmann from "../images/partners/Hoffmann.png";
import hp from "../images/partners/Hp.png";
import huawei from "../images/partners/Huawei.png";
import lg from "../images/partners/Lg.png";
import philips from "../images/partners/Philips.png";
import sony from "../images/partners/Sony.png";
import toshiba from "../images/partners/Toshiba.png";

const Partners = () => {

  // slide of partners
  let images = document.querySelector(".slide_container");

  const prevBtn = () => {
    images.style.scrollBehavior = "smooth";
    images.scrollLeft -= 176;
  };

  const nextBtn = () => {
    images.style.scrollBehavior = "smooth";
    images.scrollLeft += 176;
  };

  return (
    <div className="partners_container">
      <div onClick={prevBtn}>
        <svg
          width="37"
          height="31"
          viewBox="0 0 37 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M0.819508 16.0488L15.0296 30.2589C15.1778 30.407 15.3787 30.4902 15.5882 30.4902C15.7976 30.4902 15.9986 30.407 16.1467 30.2589C16.2948 30.1107 16.378 29.9098 16.378 29.7003C16.378 29.4909 16.2948 29.2899 16.1467 29.1418L3.28457 16.2797H36.1139C36.3232 16.2797 36.524 16.1965 36.6721 16.0485C36.8201 15.9004 36.9033 15.6996 36.9033 15.4902C36.9033 15.2809 36.8201 15.0801 36.6721 14.932C36.524 14.784 36.3232 14.7008 36.1139 14.7008H3.28457L16.1467 1.83866C16.2948 1.69053 16.378 1.48962 16.378 1.28012C16.378 1.07063 16.2948 0.869721 16.1467 0.721588C15.9986 0.573455 15.7976 0.490234 15.5882 0.490234C15.3787 0.490234 15.1778 0.573454 15.0296 0.721587L0.819508 14.9317C0.746109 15.005 0.687878 15.0921 0.648151 15.1879C0.608421 15.2838 0.587975 15.3865 0.587975 15.4902C0.587975 15.594 0.608421 15.6967 0.648151 15.7925C0.687878 15.8884 0.746109 15.9755 0.819508 16.0488Z"
            fill="#EAEAEA"
          />
        </svg>
      </div>
      <div className="slide_container">
        <div className="partners_slide">
          <div className="partners_img">
            <img src={bosch} alt="" />
          </div>
          <div className="partners_img">
            <img src={hoffmann} alt="" />
          </div>
          <div className="partners_img">
            <img src={hp} alt="" />
          </div>
          <div className="partners_img">
            <img src={huawei} alt="" />
          </div>
          <div className="partners_img">
            <img src={lg} alt="" />
          </div>
          <div className="partners_img">
            <img src={philips} alt="" />
          </div>
          <div className="partners_img">
            <img src={sony} alt="" />
          </div>
          <div className="partners_img">
            <img src={toshiba} alt="" />
          </div>
        </div>
      </div>
      <div onClick={nextBtn}>
        <svg
          width="38"
          height="31"
          viewBox="0 0 38 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Vector">
            <path
              id="Vector_2"
              d="M36.9871 16.0488L22.777 30.2589C22.6289 30.407 22.428 30.4902 22.2185 30.4902C22.009 30.4902 21.8081 30.407 21.66 30.2589C21.5118 30.1107 21.4286 29.9098 21.4286 29.7003C21.4286 29.4909 21.5118 29.2899 21.66 29.1418L34.5221 16.2797H1.69277C1.4834 16.2797 1.2826 16.1965 1.13455 16.0485C0.986494 15.9004 0.90332 15.6996 0.90332 15.4902C0.90332 15.2809 0.986494 15.0801 1.13455 14.932C1.2826 14.784 1.4834 14.7008 1.69277 14.7008H34.5221L21.66 1.83866C21.5118 1.69053 21.4286 1.48962 21.4286 1.28012C21.4286 1.07063 21.5118 0.869721 21.66 0.721588C21.8081 0.573455 22.009 0.490234 22.2185 0.490234C22.428 0.490234 22.6289 0.573454 22.777 0.721587L36.9871 14.9317C37.0605 15.005 37.1188 15.0921 37.1585 15.1879C37.1982 15.2838 37.2187 15.3865 37.2187 15.4902C37.2187 15.594 37.1982 15.6967 37.1585 15.7925C37.1188 15.8884 37.0605 15.9755 36.9871 16.0488Z"
              fill="#EAEAEA"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Partners;
