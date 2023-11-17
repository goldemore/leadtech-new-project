import React from "react";
import DropDown from "./DropDown";

const Hero = () => {
  return (
    <div className="menu_container">
      <div className="menu_wrapper">
        <DropDown />
        <div className="search_wrapper">
          <input type="text" placeholder="Axtarış" />
          <div className="search_icon">
            <svg
              width="55"
              height="40"
              viewBox="0 0 55 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="iconamoon:search">
                <rect
                  width="54"
                  height="40"
                  transform="translate(0.90332)"
                  fill="#333E48"
                />
                <path
                  id="Vector"
                  d="M35.9033 28L32.0429 24.1396M32.0429 24.1396C32.7033 23.4793 33.2271 22.6953 33.5844 21.8326C33.9418 20.9698 34.1257 20.0451 34.1257 19.1112C34.1257 18.1774 33.9418 17.2526 33.5844 16.3899C33.2271 15.5271 32.7033 14.7432 32.0429 14.0828C31.3826 13.4225 30.5986 12.8987 29.7359 12.5413C28.8731 12.1839 27.9484 12 27.0145 12C26.0807 12 25.156 12.1839 24.2932 12.5413C23.4304 12.8987 22.6465 13.4225 21.9861 14.0828C20.6525 15.4164 19.9033 17.2252 19.9033 19.1112C19.9033 20.9972 20.6525 22.806 21.9861 24.1396C23.3198 25.4732 25.1285 26.2224 27.0145 26.2224C28.9005 26.2224 30.7093 25.4732 32.0429 24.1396Z"
                  stroke="#E8E8E8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
