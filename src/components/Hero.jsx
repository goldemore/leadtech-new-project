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
            <img src="/images/iconamoon_search.svg" alt="iconamoon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
